import Container from "./components/Container";
import FlexBox from "./components/FlexBox";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <div>
      <Container>
        <FlexBox>
          <PostList />
        </FlexBox>
      </Container>
    </div>
  );
}
