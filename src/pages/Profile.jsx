import Header from "../commponents/header";
import Main from "../commponents/feed";
import "../assets/css/style.css";
import FeedNav from "../commponents/FeedNav";
import Post from "../commponents/post";
import ProfileHeader from "../commponents/profileHeader";
import {
  Aside,
  ProfileMediaShowCase,
  Search,
  TrandingNow,
  WhoToFollow,
} from "../commponents";
function Profile() {
  return (
    <div className="app" id="app">
      <Header />

      <Main>
        <FeedNav pageName={"Abdullah Khan"}></FeedNav>

        <ProfileHeader />
        <div className="all-posts">
          <Post />
        </div>
      </Main>

      <Aside>
        <Search />
        <ProfileMediaShowCase />
        <TrandingNow />
        <WhoToFollow />
      </Aside>
    </div>
  );
}

export default Profile;
