import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  padding: 1rem 4rem;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
`;
