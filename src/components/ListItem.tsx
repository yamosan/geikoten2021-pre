import type { VFC } from "react";
import Link from "next/link";

import { User } from "models/user";

type Props = {
  data: User;
};

const ListItem: VFC<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
