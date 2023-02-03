
import "./sidebar.scss"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AddIcon from '@mui/icons-material/Add';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LogoutIcon from '@mui/icons-material/Logout';



const Sidebar = () => {
 
  return (
    <div className="sidebar">
      <div className="top">
         <AutoGraphIcon/>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <li>
           <AddIcon/>
         
            <span>NEW</span>
          </li>
         
          
          <li>
           
            <PermIdentityIcon/>
            <span>PATIENT</span>
          </li>
          <li>
         
           < CreateNewFolderIcon/>
            <span>FOLDER</span>
          </li>
          
          <li>
           
            <DriveFolderUploadIcon />
            <span>UPLOAD</span>
          </li>
          <li>
           
            <SummarizeIcon/>
            <span>REPORT</span>
          </li>
          
          <li>
           
            <SettingsSuggestIcon/>
            <span>SETTING</span>
          </li>
          <li>
           
           <LogoutIcon/>
            <span>LOGOUT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
