import React, { useState } from 'react'
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItems from './ConversationItems';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(prevValue => !prevValue);
  }

  const themeClass = lightTheme ? '' : 'dark';
  const [conversations] = useState([
    {
      name: "Test 1",
      lastMessage: "sjhdfjhasdjhf",
      timeStamp: "today",
    },
    {
      name: "Test 2",
      lastMessage: "sjhdfjhasdjhf",
      timeStamp: "today",
    },
    {
      name: "Test 3",
      lastMessage: "sjhdfjhasdjhf",
      timeStamp: "today",
    },
    {
      name: "Test 4",
      lastMessage: "sjhdfjhasdjhf",
      timeStamp: "today",
    },
  ]);
  return (
    <div className={`sidebar-container ${themeClass}`}>
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => {
            navigate("users");
          }}>
            <PersonAddIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}>
            <GroupAddIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}>
            <AddCircleIcon />
          </IconButton>

          <IconButton onClick={toggleTheme}>
            {lightTheme ? <NightlightIcon /> : <LightModeIcon />}
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input placeholder='Search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation) => {
          return <ConversationItems props={conversation} key={conversation.name} />
        })}
      </div>
    </div>
  )
}

export default Sidebar