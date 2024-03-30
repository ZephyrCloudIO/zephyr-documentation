import Theme from 'rspress/theme';
import {GitHubStarWidget} from "./github-star-widget";
import {fetchGithubStarCount} from "./githubStars.api";

// let stars = await fetchGithubStarCount();
const Layout = () => <Theme.Layout afterOutline={<div>
 {/*<GitHubStarWidget starsCount={ stars} />*/}
</div>
} />;

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
