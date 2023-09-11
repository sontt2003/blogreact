import React, { useState } from 'react';
import conFigDataPost from '../../services/post';
import conFigDataTotal from '../../services/total';

interface DeleteProps {
  onDeleteSuccess: () => void;
  postId: number;
}

const DeletePost: React.FC<DeleteProps> = (props) => {
  const { onDeleteSuccess, postId } = props;
  const [total, setTotal] = useState<number | undefined>(0);

  const handlerDeletePost = async (postId: number) => {
    try {
      await conFigDataPost.deletePost(postId.toString());

      // Gọi hàm updateCount từ conFigDataTotal để cập nhật giá trị count mới
      if (total !== undefined) {
        const total = await conFigDataTotal.getCount();
        const newCount = total - 1;
        await conFigDataTotal.updateCount(newCount);
        setTotal(newCount);
      }
      onDeleteSuccess();
    } catch {
      throw new Error('Can not delete post');
    }
  };

  return (
    <button
      type="button"
      className="btn-close btn-delete"
      aria-label="Close"
      onClick={() => handlerDeletePost(postId)}
    ></button>
  );
};

export default DeletePost;