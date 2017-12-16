import axios from "axios";

export default {
  // Gets all artists
  getArtists: function() {
    return axios.get("/api/artists");
  },
  // Gets the artist with the given id
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Deletes the artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves an artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  },

  // Save a creation
  saveCreation: function(creationData) {
    return axios.post("/api/creations", creationData);
  }

};
