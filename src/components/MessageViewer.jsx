import React, { useState, useEffect } from 'react';
import { messageStorage } from '../utils/messageStorage';

const MessageViewer = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    const allMessages = messageStorage.getMessages();
    setMessages(allMessages);
    setUnreadCount(messageStorage.getUnreadCount());
  };

  const handleMessageClick = (messageId) => {
    messageStorage.markAsRead(messageId);
    loadMessages();
  };

  const handleDeleteMessage = (messageId) => {
    messageStorage.deleteMessage(messageId);
    loadMessages();
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all messages?')) {
      messageStorage.clearAllMessages();
      loadMessages();
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
        >
          <i className="fas fa-envelope text-xl"></i>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-white/20 max-w-4xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-white/5 p-6 border-b border-white/20 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Messages</h2>
            <p className="text-gray-400 text-sm mt-1">
              {messages.length} total messages • {unreadCount} unread
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {messages.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-red-400 hover:text-red-300 transition-colors"
                title="Clear all messages"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="overflow-y-auto max-h-[60vh] p-6">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-inbox text-gray-500 text-4xl mb-4"></i>
              <p className="text-gray-400">No messages yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => handleMessageClick(message.id)}
                  className={`bg-white/5 rounded-lg p-4 border transition-all duration-300 cursor-pointer hover:bg-white/10 ${
                    message.read ? 'border-white/10' : 'border-blue-500/50 bg-blue-500/5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-white font-semibold">{message.name}</h3>
                        {!message.read && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                        )}
                      </div>
                      <p className="text-blue-400 text-sm mb-1">{message.email}</p>
                      <h4 className="text-white font-medium mb-2">{message.subject}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{message.message}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <span className="text-gray-500 text-xs whitespace-nowrap">
                        {formatDate(message.timestamp)}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMessage(message.id);
                        }}
                        className="text-red-400 hover:text-red-300 transition-colors"
                        title="Delete message"
                      >
                        <i className="fas fa-trash text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageViewer;
