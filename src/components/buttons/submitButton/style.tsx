import styled from "styled-components";
import LoadingButton from '@mui/lab/LoadingButton';

export const ButtonDiv = styled.div`

`

export const LoadingButtonStyle = styled(LoadingButton)`
    &&{
        text-transform: none;
        background: rgba(247, 164, 157, 1);
        color: var(--White, #fff);
        &:hover{
            background: rgba(247, 164, 157, 1);
        }
    }
`