const MyAccountContent = ({ userDatas }) => {
  return (
    <div className="userinfo">
      <div className="userinfo_content">
        <h5>My Informations</h5>
        <ul className="userinfo_content_subtitle">
          <li className="userinfo_content_subtitle_entitled">
            <span>First name :</span> {userDatas.firstName}{' '}
          </li>
          <li className="userinfo_content_subtitle_entitled">
            <span>Last name :</span> {userDatas.lastName}{' '}
          </li>
          <li className="userinfo_content_subtitle_entitled">
            <span>Email :</span> {userDatas.email}{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyAccountContent;
