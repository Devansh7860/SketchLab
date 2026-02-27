import { useMutation } from "@liveblocks/react/suspense";

export const useDeleteLayers = () => {
  return useMutation(
    ({ storage, setMyPresence, self }) => {
      const selection = self.presence.selection;
      const liveLayers = storage.get("layers");
      const liveLayerIds = storage.get("layerIds");

      for (const id of selection) {
        liveLayers.delete(id);

        const index = liveLayerIds.indexOf(id);

        if (index !== -1) {
          liveLayerIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [],
  );
};