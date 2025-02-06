import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: 'white',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}));

export default function SearchAppBar({ onFilterChange, onSearchChange }) {
  const [filter, setFilter] = React.useState('');

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
    onFilterChange(filterValue);
  };

  const handleSearchChange = (event) => {
    onSearchChange(event);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Recipe App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
            />
          </Search>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginLeft: 2 }}>
            <InputLabel>Filter</InputLabel>
            <StyledSelect
              value={filter}
              onChange={handleFilterChange}
              label="Filter"
              aria-label="Filter recipes"
            >
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="">Clear All</MenuItem>
            </StyledSelect>
          </FormControl>
          <IconButton
            component={Link}
            to="/favorites"
            size="large"
            edge="end"
            color="inherit"
            aria-label="favorites"
            sx={{ ml: 2 }}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
