// Message Storage System for Contact Form

export const messageStorage = {
  // Save message to local storage
  saveMessage: (messageData) => {
    try {
      const existingMessages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
      const newMessage = {
        ...messageData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        read: false
      };
      existingMessages.unshift(newMessage); // Add new message at the beginning
      
      // Keep only last 50 messages
      if (existingMessages.length > 50) {
        existingMessages.splice(50);
      }
      
      localStorage.setItem('portfolioMessages', JSON.stringify(existingMessages));
      return true;
    } catch (error) {
      console.error('Error saving message:', error);
      return false;
    }
  },

  // Get all messages
  getMessages: () => {
    try {
      return JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
    } catch (error) {
      console.error('Error getting messages:', error);
      return [];
    }
  },

  // Mark message as read
  markAsRead: (messageId) => {
    try {
      const messages = messageStorage.getMessages();
      const messageIndex = messages.findIndex(msg => msg.id === messageId);
      if (messageIndex !== -1) {
        messages[messageIndex].read = true;
        localStorage.setItem('portfolioMessages', JSON.stringify(messages));
      }
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  },

  // Delete message
  deleteMessage: (messageId) => {
    try {
      const messages = messageStorage.getMessages();
      const filteredMessages = messages.filter(msg => msg.id !== messageId);
      localStorage.setItem('portfolioMessages', JSON.stringify(filteredMessages));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  },

  // Get unread message count
  getUnreadCount: () => {
    try {
      const messages = messageStorage.getMessages();
      return messages.filter(msg => !msg.read).length;
    } catch (error) {
      console.error('Error getting unread count:', error);
      return 0;
    }
  },

  // Clear all messages
  clearAllMessages: () => {
    try {
      localStorage.removeItem('portfolioMessages');
    } catch (error) {
      console.error('Error clearing messages:', error);
    }
  }
};
