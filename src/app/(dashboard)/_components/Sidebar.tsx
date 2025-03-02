import React from "react";

type Props = {
  websites: { id: string; name: string; icon: string }[] | null | undefined;
};

const Sidebar = ({ websites }: Props) => {

    const { expand, onExpand, page, onSignOut } = useSideBar();
    

  return <div>Sidebar</div>;
};

export default Sidebar;
