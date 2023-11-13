import "./css/tprofileHeader.css";
function ProfileHeader() {
  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-hero-container">
          <div className="hero">
            <div className="round-profile">a</div>
          </div>
          <a href="/setting-profile">Edit Profile</a>
        </div>

        <div className="information">
          <div className="name-and-id">
            <h3>abdullah khan</h3>
            <p>@abdulla89556067</p>
          </div>

          <div className="joining-date">
            <p>
              <i class="far fa-calendar-alt"></i> Joined July 2022
            </p>
          </div>

          <div className="followers">
            <a href="/">
              <span className="number">6</span> Following
            </a>
            <a href="/">
              <span className="number">0</span> Followers
            </a>
          </div>
        </div>

        <div className="component-btns">
          <div className="row">
            <div className="col active">
              <a href="/">Posts</a>
            </div>
            <div className="col">
              <a href="/">Replies</a>
            </div>
            <div className="col">
              <a href="/">Highlights</a>
            </div>
            <div className="col">
              <a href="/">Media</a>
            </div>
            <div className="col">
              <a href="/">Likes</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
