export const referenceScreens = {
  menu: "/assets/ui/generated/launch_runtime_scene.svg",
  loading: "/assets/ui/generated/launch_runtime_scene.svg",
  pressStart: "/assets/ui/generated/launch_runtime_scene.svg",
  journal: "/assets/ui/generated/journal_runtime_scene.svg",
  repertoire: "/assets/ui/generated/repertoire_runtime_scene.svg",
  dialogue: "/assets/ui/generated/dialogue_runtime_scene.svg",
  reputation: "/assets/ui/generated/reputation_runtime_scene.svg",
  options: "/assets/ui/generated/options_runtime_scene.svg",
  save: "/assets/ui/generated/save_runtime_scene.svg",
  chapterSelect: "/assets/ui/generated/chapter_select_runtime_scene.svg",
  death: "/assets/ui/generated/death_runtime_scene.svg",
  feedback: "/assets/ui/generated/feedback_runtime_scene.svg",
  pause: "/assets/ui/generated/pause_runtime_scene.svg",
  shelter: "/assets/ui/generated/shelter_runtime_scene.svg",
  cinematics: "/assets/ui/generated/cinematics_runtime_scene.svg",
};

export const menuIdentity = {
  cropNote: "Use launch_runtime_scene.svg as the playable animated menu scene; never show annotated boards as final screens.",
  layers: ["rain", "smoke", "warm horizon", "quarantine sign", "left menu"],
};


export const latestAttachmentReferences = [];

export const referenceRules = {
  neverShowFullBoardsAsFinalScreens: true,
  useAttachmentsForBossAndUiExtraction: true,
  finalScreensUseCroppedAtmosphericLayers: true,
  sourceFolder: "/Users/annalogacheva/Downloads/attachments",
};
