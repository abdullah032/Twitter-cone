import "../assets/css/style.css";
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
  NotificationMessage,
} from "../commponents";
function Notification() {
  return (
    <div className="app" id="app">
      <Header />

      <Main>
        <FeedNav pageName="Home">
          <div className="col">
            <a href="/all" className="active">
              All
            </a>
          </div>
          <div className="col">
            <a href="/verified">Verified</a>
          </div>
          <div className="col">
            <a href="/mentions">Mentions</a>
          </div>
        </FeedNav>

        <div className="all-posts">
          <NotificationMessage />
          <NotificationMessage />
          <NotificationMessage />
        </div>
      </Main>
      <Aside>
        <Search />
        <TrandingNow />
        <WhoToFollow />
      </Aside>
    </div>
  );
}

export default Notification;
