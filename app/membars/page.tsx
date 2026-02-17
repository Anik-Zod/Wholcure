import React from "react";
import { Membar } from "../components/Membar";
import SectionHeader from "../components/SectionHeader";
import { getALlMembers } from "@/services/membarService";

export const dynamic = 'force-dynamic';

async function Page() {
  const members = await getALlMembers();
  console.log("our membars = ", members)
  return (
    <div className="py-26 px-6 md:px-12 bg-bg-light">
      <SectionHeader
        badge="Know Our Teams"
        description="A diverse group of passionate professionals,each bringing unique skills and experiences to drive innovation and excellence in every project we undertake"
        title="Meet Our Board"
        highlightedText="Membars"
      />

      <div className=" grid grid-cols-1  justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {members.map((member: any) => (
          <Membar key={member._id} name={member.name} photo={member.photo} role={member.role} socialMedia={member.socialMedia} />
        ))}
      </div>
    </div>
  );
}

export default Page;
