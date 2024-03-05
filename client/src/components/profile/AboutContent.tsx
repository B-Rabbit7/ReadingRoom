import { observer } from "mobx-react-lite";
import { Profile } from "../../models/profile";
import { Grid, Header, Item } from "semantic-ui-react";

interface Props {
  profile: Profile;
}

export default observer(function AboutContent({ profile }: Props) {
  return (
    <div>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                avatar
                size="small"
                src={profile?.image || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Header as="h2">{profile?.displayName}</Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>idk what to put here yet</Grid.Column>
      </Grid>
    </div>
  );
});
