import PropTypes from 'prop-types';
import FileUpload from "../atoms/FileUpload";
import Label from "../atoms/Label";

const FileUploadField = ({ label, onChange, thumbnail }) => (
  <div>
    <Label>{label}</Label>
    <FileUpload onChange={onChange} thumbnail={thumbnail} />
  </div>
);

FileUploadField.propTypes = {
  label: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,  
  thumbnail: PropTypes.string,        
};

export default FileUploadField;