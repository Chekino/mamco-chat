const chatModel = require("../models/chatModel");

// Créer un nouveau chat
const createChat = async (req, res) => {
  // Extraction des membres de la requête HTTP
  const { firstId, secondId } = req.body;

  try {
    // Recherche d'une conversation existante avec les deux membres spécifiés
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    // Si une conversation existe, la renvoyer en tant que réponse
    if (chat) {
      res.status(200).json(chat);
    } else {
      // Si la conversation n'existe pas, créer une nouvelle instance de chatModel
      const newChat = new chatModel({
        members: [firstId, secondId],
      });

      // Enregistrement de la nouvelle conversation dans la bd
      const response = await newChat.save();

      // Renvoyer les détails de la nouvelle conversation en réponse
      res.status(200).json(response);
    }
  } catch (error) {
    // En cas d'erreur, afficher l'erreur dans la console et renvoyer une réponse d'erreur
    console.error(error);
    res.status(500).json(error);
  }
};

// Trouver les conversations d'un utilisateur
const findUserChats = async (req, res) => {
  // Extraction de l'ID de l'utilisateur à partir des paramètres de la requête
  const userId = req.params.userId;

  try {
    // Recherche des conversations où l'utilisateur est membre
    const chats = await chatModel.find({
      members: { $in: [userId] },
    });

    // Réponse avec les conversations trouvées
    res.status(200).json(chats);
  } catch (error) {
    // En cas d'erreur, affichage dans la console et réponse d'erreur
    console.error(error);
    res.status(500).json(error);
  }
};

//Trouver une conversation entre deux membres
const findChat = async (req, res) => {
  // Extraction des identifiants des deux membres à partir des paramètres de la requête

  const { firstId, secondId } = req.params;

  try {
    // Recherche d'une conversation où les deux membres sont présents
    const chat = await chatModel.find({
      members: { $all: [firstId, secondId] },
    });

    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { createChat, findUserChats, findChat };
