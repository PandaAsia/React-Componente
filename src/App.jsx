import { useState } from "react";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  const formatUserName = (username) => `@${username}`;

  const hito = { UserName: "HitomiKeikoo", formatUserName };
  //const formattedUserName = <span>@HitomiKeikoo</span>;

  const [name, setName] = useState("midudev");

  const users = [
    {
      UserName: "megan_world0",
      formatUserName,
      name: "Megan world",
    },
    {
      UserName: "joyaa_ac",
      formatUserName,
      name: "Jade lyn",
    },
    {
      UserName: "lush_luna69",
      formatUserName,
      name: "Kate 💖 Cat",
    },
  ];

  return (
    <>
      <section className="app">
        {/* <TwitterFollowCard
          formatUserName={formatUserName}
          //formattedUserName={formattedUserName}
          UserName="@shana_Panda"
          name="Shana Haruno kito"
          isFollowing
        />
        <TwitterFollowCard
          formatUserName={formatUserName}
          //formattedUserName={formattedUserName}
          UserName="@shana_Panda"
          name="Shana Haruno kito"
          isFollowing
        />
        <TwitterFollowCard
          formatUserName={formatUserName}
          //formattedUserName={formattedUserName}
          UserName="@HitomiKeikoo"
          name="Hitomi Keiko"
          isFollowing
        />
        <TwitterFollowCard
          formatUserName={formatUserName}
          //formattedUserName={formattedUserName}
          UserName="@SofiaRodri_2"
          name="Sofia Rodriguez"
          isFollowing
        /> */}
        <TwitterFollowCard UserName={name} formatUserName={formatUserName}>
          Michelle Rabbit
        </TwitterFollowCard>
        <TwitterFollowCard formatUserName={formatUserName}>
          Michelle Rabbit
        </TwitterFollowCard>
        <TwitterFollowCard {...hito}>🌸 Hitomi Keiko 🌸</TwitterFollowCard>

        {users.map((user) => {
          const { UserName, name, formatUserName } = user;
          return (
            <TwitterFollowCard
              key={UserName}
              UserName={UserName}
              formatUserName={formatUserName}
            >
              {name}
            </TwitterFollowCard>
          );
        })}
        <button onClick={() => setName("michellexrabbit")}>
          Cambiar Nombre
        </button>
      </section>
    </>
  );
}

export default App;
