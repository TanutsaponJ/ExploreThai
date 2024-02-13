import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const ShareLink = () => {
  const shareFaceBookUrl = "https://twitter.com/compose/tweet";

  return (
    <div className="flex items-center gap-2">
      <h2 className="text-xl font-bold">Share to</h2>
      <div>
        <FacebookShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
          <FacebookIcon className="w-8 h-auto rounded-lg" />
        </FacebookShareButton>
      </div>
      <div>
        <RedditShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
          <RedditIcon className="w-8 h-auto rounded-lg" />
        </RedditShareButton>
      </div>
      <div>
        <TwitterShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
          <TwitterIcon className="w-8 h-auto rounded-lg" />
        </TwitterShareButton>
      </div>
      <div>
        <EmailShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
          <EmailIcon className="w-8 h-auto rounded-lg" />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareLink;
