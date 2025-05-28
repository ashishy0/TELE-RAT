const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7786392665:AAEim-rUmBxg4H6Sz87u_ksFfas7P5hp85I',
  id: isNaN(parsedId) ? 7635646819 : parsedId // replace 12345.. with your telegram chat id
};
