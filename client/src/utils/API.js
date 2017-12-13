import axios from "axios";

export default {
  // Gets an artis with the given id
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Deletes an artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves an artist to the database
  addArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  }
};
