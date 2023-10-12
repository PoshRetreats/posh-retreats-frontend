import styled from "styled-components";
import LoadingButton from '@mui/lab/LoadingButton';

export const ButtonDiv = styled.div`

`

export const LoadingButtonStyle = styled(LoadingButton)`
    &&{
        text-transform: none;
        background: rgba(196, 196, 196, 1);
        color: var(--White, #fff);
        &:hover{
            background: rgba(196, 196, 196, 1);
        }
    }
`