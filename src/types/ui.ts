import type { Dispatch, SetStateAction, FormEvent } from "react";

export type Collection = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  available: boolean;
};

export type HelpFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type HelpModalProps = {
  open: boolean;
  onClose: () => void;
  formData: HelpFormData;
  setFormData: Dispatch<SetStateAction<HelpFormData>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export type CollectionCircleProps = {
  collection: Collection;
};
