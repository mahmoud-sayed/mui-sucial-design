import { styled, Toolbar, } from "@mui/material";
import { Box } from '@mui/material';



export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const Search = styled('div')(({ theme }) => ({

  background: '#fff',
  padding: '0px 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',
  alignItems: 'center'
}));

export const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center'
}));