import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/tokenManager.js";
import { axiosInstance as api } from "../../config/axiosInstance.js";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Label from "../atoms/Label";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import defaultProfile from "../../assets/defaultProfile.png";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FormEditProfile = () => {
  const DEFAULT_PROFILE_PHOTO = defaultProfile;

  const [formDataPayload, setFormDataPayload] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    profilePhoto: null,
  });
  const [previewUrl, setPreviewUrl] = useState(DEFAULT_PROFILE_PHOTO);
  const [accessToken, setAccessToken] = useState("");
  const [file, setFile] = useState();
  const [oldFile, setOldFile] = useState("");
  const [isKYC, setIsKYC] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    setAccessToken(getAccessToken());
  }, []);

  async function fetchCurrentUser() {
    try {
      const data = await api.get("/user/profile");
      const photoUrl = data.data.photo_url
        ? `${import.meta.env.VITE_BASE_URL}/files/${data.data.photo_url}`
        : DEFAULT_PROFILE_PHOTO;

      setPreviewUrl(photoUrl);
      setFormDataPayload({
        name: data.data.name,
        email: data.data.email,
        phoneNumber: data.data.phoneNumber,
      }); // Directly use data from interceptor
      setIsKYC(data.data.isKYC);
      setOldFile(data.data.nationalIdentityCard);
      if (data.data.nationalIdentityCard) {
        setFile([
          {
            source: `${import.meta.env.VITE_BASE_URL}/files/${
              data.data.nationalIdentityCard
            }`,
            options: { type: "input" },
            name: data.data.name,
          },
        ]);
      }
      return data;
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
      setPreviewUrl(DEFAULT_PROFILE_PHOTO);
      throw error;
    }
  }

  useEffect(() => {
    fetchCurrentUser();
  }, [accessToken]);

  const getValidImageUrl = (url) => {
    if (!url || url === "null" || url === "undefined") {
      return DEFAULT_PROFILE_PHOTO;
    }
    return url;
  };

  async function handleDeleteProfilePhoto(e) {
    e.preventDefault();

    try {
      const confirmation = await Swal.fire({
        icon: "warning",
        title: "Yakin ingin menghapus foto profil?",
        text: "Tindakan ini tidak dapat dibatalkan.",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus",
        cancelButtonText: "Batal",
      });

      if (confirmation.isConfirmed) {
        await api.delete("/user/profile/photo", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Langsung set ke default photo
        setPreviewUrl(DEFAULT_PROFILE_PHOTO);

        setFormDataPayload((prevState) => ({
          ...prevState,
          profilePhoto: null,
        }));

        // Refresh data user setelah hapus foto
        await fetchCurrentUser();

        Swal.fire({
          icon: "success",
          title: "Foto profil berhasil dihapus",
          text: "Foto profil Anda telah dihapus.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(
        "Gagal menghapus foto profil:",
        error.response?.data || error
      );
      Swal.fire({
        icon: "error",
        title: "Gagal menghapus foto profil",
        text: "Terjadi kesalahan saat menghapus foto profil Anda.",
        confirmButtonText: "OK",
      });
    }
  }

  // Effect untuk memastikan preview URL selalu valid
  useEffect(() => {
    setPreviewUrl(getValidImageUrl(previewUrl));
  }, [previewUrl]);

  async function triggerUpdateUser(e) {
    e.preventDefault();
    try {
      // Buat payload data profil
      const formDataPayloadUpdate = new FormData();
      for (let [key, val] of Object.entries(formDataPayload)) {
        formDataPayloadUpdate.set(key, val);
      }

      await api.put("/user/profile", formDataPayloadUpdate, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Profil berhasil diperbarui",
        text: "Data profil Anda berhasil diperbarui.",
        confirmButtonText: "OK",
      });

      // Jika KTP sudah pernah diupload, blokir upload ulang
      if (isKYC) {
        Swal.fire({
          icon: "info",
          title: "KTP sudah diverifikasi",
          text: "KTP Anda sudah terverifikasi. Tidak dapat diubah lagi.",
          confirmButtonText: "OK",
        });
      } else if (file && file.length > 0) {
        // Jika user belum KYC dan file baru diunggah, upload file KTP
        const formDataFile = new FormData();
        formDataFile.append("nationalIdentityCard", file[0]?.file);

        const axiosUploadFileResponse = await api.post(
          "/user/upload",
          formDataFile,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        Swal.fire({
          icon: "success",
          title: "KTP berhasil diupload",
          text: "KTP Anda berhasil diunggah ke sistem.",
          confirmButtonText: "OK",
        });

        console.log("KTP berhasil diupload:", axiosUploadFileResponse.data);
      }

      Navigate("/profile");
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
      throw error;
    }
  }

  useEffect(() => {
    if (!file && oldFile) {
      setFile([
        {
          source: `${import.meta.env.VITE_BASE_URL}/files/${oldFile}`,
          options: { type: "input" },
        },
      ]);
    }
  }, [oldFile, file]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormDataPayload((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onChangeFileHandler = (e) => {
    const file = e.target.files[0];
    setFormDataPayload((prevState) => {
      return {
        ...prevState,
        profilePhoto: file,
      };
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result); // Set hasil pembacaan ke previewUrl
      };
      reader.readAsDataURL(file); // Membaca file sebagai DataURL
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-semibold text-black">Edit Profile</h1>
        </div>
        <form onSubmit={triggerUpdateUser} className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={getValidImageUrl(previewUrl)}
                alt="Profile"
                onError={(e) => {
                  e.target.src = DEFAULT_PROFILE_PHOTO;
                }}
                className="w-32 h-32 rounded-full shadow-lg border-4 border-[#5E84C5]"
              />
              <label
                className="absolute bottom-0 right-0 p-2 rounded-full shadow cursor-pointer bg-[#5E84C5] text-white hover:text-[#5E84C5] hover:bg-white border-2 border-[#5E84C5]
              transition-transform duration-300 transform hover:scale-105"
              >
                <CameraIcon className="w-5 h-5" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onChangeFileHandler}
                />
              </label>
              {previewUrl !==
                "${import.meta.env.VITE_BASE_URL}/public/images/defaultProfile.png" && (
                <button
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                  onClick={handleDeleteProfilePhoto}
                >
                  Hapus
                </button>
              )}
            </div>
          </div>
          <FormField
            label="Nama"
            name={"name"}
            type="text"
            placeholder="Nama Lengkap"
            value={formDataPayload?.name}
            onChange={onChangeHandler}
          />
          <FormField
            label="Email"
            name={"email"}
            type="email"
            placeholder="Alamat Email"
            value={formDataPayload?.email}
            disabled={true}
            onChange={onChangeHandler}
          />
          <FormField
            label="Nomor Telepon"
            name={"phoneNumber"}
            type="tel"
            placeholder="Nomor Telepon"
            value={formDataPayload?.phoneNumber}
            onChange={onChangeHandler}
          />
          <FormField
            label="Password"
            name={"password"}
            type="password"
            placeholder="Password Baru"
            onChange={onChangeHandler}
          />
          <div className={"text-md md:text-xl"}>
            <Label>Foto KTP</Label>
          </div>
          <FilePond
            disabled={isKYC}
            files={file}
            onupdatefiles={setFile}
            allowMultiple={false}
            maxFiles={1}
            name="file" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <div className="flex justify-center">
            <Button type="submit" onClick={triggerUpdateUser}>
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProfile;
