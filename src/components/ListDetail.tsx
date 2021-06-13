import type { VFC } from "react";

import { User } from "models/user";

type Props = {
  item: User;
};

const ListDetail: VFC<Props> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
