import "../assets/css/style.css";
import "../assets/css/explore.css";

import {
  Header,
  Main,
  FeedNav,
  MessageBox,
  Post,
  Aside,
  Search,
  Subscribe,
  TrandingNow,
  WhoToFollow,
} from "../commponents";

function Explore() {
  return (
    <div className="app" id="app">
      <Header />

      <Main>
        <div className="explore">
          <Search />
          <TrandingNow />
          <div className="all-posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </Main>
      <Aside>
        <WhoToFollow />
      </Aside>
    </div>
  );
}

export default Explore;
