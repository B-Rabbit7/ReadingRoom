import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Grid, Header, Item, Segment, Tab, TabPane } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { useEffect } from "react";
import LoadingComponent from "../components/LoadingComponent";
import AboutContent from "../components/profile/AboutContent";
import AvatarsContent from "../components/profile/AvatarsContent";

export default observer(function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const { profileStore } = useStore();
  const { loadingProfile, loadProfile, profile } = profileStore;

  const panes = [
    {
      menuItem: "About",
      render: () => (
        <TabPane>
          <AboutContent profile={profile!} />
        </TabPane>
      ),
    },
    {
      menuItem: "Avatars",
      render: () => (
        <TabPane>
          <AvatarsContent profile={profile!} />
        </TabPane>
      ),
    },
    {
      menuItem: "Book Clubs",
      render: () => <TabPane>Book Clubs Content</TabPane>,
    },
  ];

  useEffect(() => {
    if (username) loadProfile(username);
  }, [loadProfile, username]);

  if (loadingProfile) return <LoadingComponent content="Loading profile..." />;

  return (
    <>
      <h1>View Profile</h1>
      <Tab
        menu={{ fluid: true, vertical: true }}
        menuPosition="right"
        panes={panes}
      />
    </>
  );
});
