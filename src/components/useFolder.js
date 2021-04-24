/* eslint-disable default-case */
import React, { useReducer, useEffect } from "react";
import { database } from "../firebase";
export const ROOT_FOLDER = { name: "Root", id: null, path: [] };

const ACTION = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTION.SELECT_FOLDER:
      return {
        ...state,
        folderId: payload.folderId || null,
        folder: payload.folder,
        childFolders: [],
        childFiles: [],
      };
    case ACTION.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
  }
}

function useFolder(folderId = null, folder) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
  });
  useEffect(() => {
    if (folder == null) {
      return dispatch({
        type: ACTION.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }
    database.folders
      .doc(folderId)
      .get()
      .then((doc) =>
        dispatch({
          type: ACTION.UPDATE_FOLDER,
          payload: { folder: database.formatDoc(doc) },
        })
      )
      .catch(() =>
        dispatch({
          type: ACTION.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        })
      );
  }, [folderId]);
  return <div></div>;
}

export default useFolder;
