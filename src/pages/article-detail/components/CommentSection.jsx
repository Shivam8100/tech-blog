import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleSubmitComment = (e) => {
    e?.preventDefault();
    if (newComment?.trim()) {
      onAddComment({
        id: Date.now(),
        author: "You",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        content: newComment,
        timestamp: new Date(),
        replies: []
      });
      setNewComment('');
    }
  };

  const handleSubmitReply = (e, commentId) => {
    e?.preventDefault();
    if (replyText?.trim()) {
      // Handle reply submission logic here
      setReplyTo(null);
      setReplyText('');
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="MessageSquare" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-text-primary">
          Discussion ({comments?.length})
        </h3>
      </div>
      {/* Add Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="User" size={20} color="white" />
            </div>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e?.target?.value)}
              placeholder="Share your thoughts on this article..."
              className="w-full px-3 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              rows="3"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-text-secondary">
                Markdown supported
              </span>
              <Button
                type="submit"
                variant="default"
                size="sm"
                iconName="Send"
                iconPosition="left"
                disabled={!newComment?.trim()}
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </form>
      {/* Comments List */}
      <div className="space-y-6">
        {comments?.map((comment) => (
          <div key={comment?.id} className="space-y-4">
            {/* Main Comment */}
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src={comment?.avatar}
                  alt={comment?.author}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="bg-surface border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-text-primary">{comment?.author}</span>
                    <span className="text-xs text-text-secondary">
                      {formatTimeAgo(comment?.timestamp)}
                    </span>
                  </div>
                  <p className="text-text-primary text-sm leading-relaxed">
                    {comment?.content}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 mt-2">
                  <button className="flex items-center space-x-1 text-xs text-text-secondary hover:text-text-primary transition-colors duration-200">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Like</span>
                  </button>
                  <button
                    onClick={() => setReplyTo(comment?.id)}
                    className="flex items-center space-x-1 text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="Reply" size={14} />
                    <span>Reply</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyTo === comment?.id && (
                  <form onSubmit={(e) => handleSubmitReply(e, comment?.id)} className="mt-3">
                    <div className="flex space-x-2">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e?.target?.value)}
                        placeholder="Write a reply..."
                        className="flex-1 px-3 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none text-sm"
                        rows="2"
                      />
                      <div className="flex flex-col space-y-1">
                        <Button
                          type="submit"
                          variant="default"
                          size="sm"
                          disabled={!replyText?.trim()}
                        >
                          Reply
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setReplyTo(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Replies */}
            {comment?.replies && comment?.replies?.length > 0 && (
              <div className="ml-12 space-y-3">
                {comment?.replies?.map((reply) => (
                  <div key={reply?.id} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={reply?.avatar}
                        alt={reply?.author}
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted border border-border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-text-primary text-sm">{reply?.author}</span>
                          <span className="text-xs text-text-secondary">
                            {formatTimeAgo(reply?.timestamp)}
                          </span>
                        </div>
                        <p className="text-text-primary text-sm leading-relaxed">
                          {reply?.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;