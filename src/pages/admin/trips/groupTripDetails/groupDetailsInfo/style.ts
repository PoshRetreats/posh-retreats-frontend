import styled from "styled-components";

export const AdminGroudInfoMain = styled.div`
        background-color: rgba(255, 255, 255, 1);
        padding: 1rem;
        border-radius: 10px;
        width: 60%;
        margin-top: 2rem;
	.AdminGroudInfoMain {
		margin-top: 2.5rem;
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        gap: 1rem;
			h3 {
				font-size: 1rem;
				color: rgba(2, 14, 7, 1);
			}
			span {
				color:rgba(2, 14, 7, 1);
			}
	}
    ul{
        h3{
            margin-top: 2rem;
            font-size: 1rem;
            margin-bottom: .7rem;
        }
        li{
line-height: 30px;
        }
    }
`;


export const InfoHeader = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin-top: 4rem;
img{
    cursor: pointer;
}
`