import "../assets/css/style.css";
import {
  Header,
  Main,
  FeedNav,
  MessageBox,
  Post,
  Aside,
  Subscribe,
  TrandingNow,
  WhoToFollow,
} from "../commponents";
function App() {
  return (
    <div className="app" id="app">
      <Header />

      <Main>
        <FeedNav pageName="Home">
          <div className="col">
            <a href="/for-you" className="active">
              For you
            </a>
          </div>
          <div className="col">
            <a href="/for-you">Following</a>
          </div>
        </FeedNav>
        <MessageBox />
        <div className="all-posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </Main>
      <Aside>
        <Subscribe />
        <TrandingNow />
        <WhoToFollow />
      </Aside>
    </div>
  );
}

export default App;
