import { Container } from "react-bootstrap";

const MatchCommunity = () => {
    const numbers = [1, 2, 3, 4]
    return (
        <Container>
            {numbers.map((number) => {
                console.log(number)
                return(
                    <img src={""}/>
                )
            })}
        </Container>
    )
}

export default MatchCommunity;