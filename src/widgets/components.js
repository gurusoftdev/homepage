import dynamic from "next/dynamic";

const components = {
  adguard: dynamic(() => import("./adguard/component")),
  authentik: dynamic(() => import("./authentik/component")),
  autobrr: dynamic(() => import("./autobrr/component")),
  bazarr: dynamic(() => import("./bazarr/component")),
  changedetectionio: dynamic(() => import("./changedetectionio/component")),
  coinmarketcap: dynamic(() => import("./coinmarketcap/component")),
  docker: dynamic(() => import("./docker/component")),
  emby: dynamic(() => import("./emby/component")),
  gotify: dynamic(() => import("./gotify/component")),
  homebridge: dynamic(() => import("./homebridge/component")),
  jackett: dynamic(() => import("./jackett/component")),
  jellyfin: dynamic(() => import("./emby/component")),
  jellyseerr: dynamic(() => import("./jellyseerr/component")),
  lidarr: dynamic(() => import("./lidarr/component")),
  mastodon: dynamic(() => import("./mastodon/component")),
  npm: dynamic(() => import("./npm/component")),
  nzbget: dynamic(() => import("./nzbget/component")),
  ombi: dynamic(() => import("./ombi/component")),
  overseerr: dynamic(() => import("./overseerr/component")),
  pihole: dynamic(() => import("./pihole/component")),
  plex: dynamic(() => import("./plex/component")),
  portainer: dynamic(() => import("./portainer/component")),
  prowlarr: dynamic(() => import("./prowlarr/component")),
  proxmox: dynamic(() => import("./proxmox/component")),
  qbittorrent: dynamic(() => import("./qbittorrent/component")),
  radarr: dynamic(() => import("./radarr/component")),
  readarr: dynamic(() => import("./readarr/component")),
  rutorrent: dynamic(() => import("./rutorrent/component")),
  sabnzbd: dynamic(() => import("./sabnzbd/component")),
  sonarr: dynamic(() => import("./sonarr/component")),
  speedtest: dynamic(() => import("./speedtest/component")),
  strelaysrv: dynamic(() => import("./strelaysrv/component")),
  tautulli: dynamic(() => import("./tautulli/component")),
  traefik: dynamic(() => import("./traefik/component")),
  transmission: dynamic(() => import("./transmission/component")),
  unifi: dynamic(() => import("./unifi/component")),
};

export default components;
