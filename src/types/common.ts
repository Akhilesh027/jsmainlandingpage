export type onHandler = {
  onOpen: () => void;
};

export type VoidHandler = () => void;

export type ModalProps = {
  open: boolean;
  onOpen: VoidHandler;
};
