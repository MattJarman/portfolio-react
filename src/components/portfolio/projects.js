const Projects = [
  {
    name: 'Trotter',
    image: `${process.env.PUBLIC_URL}/img/trotter.png`,
    text: `Trotter is a discord bot for I created for some simple moderation. It also uses [Steam](https://store.steampowered.com/), [HowLongToBeat](https://howlongtobeat.com/), and [IsThereAnyDeal](https://isthereanydeal.com/) to provide some of the following useful commands:  \n* **Check your playtime for a specific game**  \n* **Check completion time for a game**  \n* **Find the best deal for a game**`,
    tags: ['javascript', 'nodejs', 'mongodb', 'docker'],
    github: 'https://github.com/MattJarman/trotter-bot',
  },
  {
    name: 'Steam Organiser',
    image: `${process.env.PUBLIC_URL}/img/steam-organiser.png`,
    text:
      "I developed the Steam Organiser *(great name, I know)* to help manage my evergrowing mountain of Steam games. With it, you can add any game from the steam catalog to your backlog, and mark them as completed whenever you're finished with them. The Steam Organiser also has a library page, where you can sort and filter all of the games in your library, making it even easier to manage your games. To use it, all you need to do is to login with your [Steam](https://store.steampowered.com/) credentials, and you can immediately start managing your backlog!",
    tags: ['javascript', 'nodejs', 'mongodb'],
    github: 'https://github.com/MattJarman/steam-library-app',
  },
  {
    name: 'Pokédot',
    image: `${process.env.PUBLIC_URL}/img/pokedot.png`,
    text: `Pokédot is a Pokémon database that uses the [Veekun](https://github.com/veekun/pokedex) Pokémon database. It contains detailed information about every Pokémon, which includes: forms, types, base stats, evolutions, moves, and much more. In the future, it will include a team builder allowing for easy composition of effective Pokémon teams.`,
    tags: ['php', 'laravel', 'mysql', 'docker'],
    github: 'https://github.com/MattJarman/pokedot',
  },
];

export default Projects;
