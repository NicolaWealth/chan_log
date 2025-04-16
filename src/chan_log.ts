export const chanLog = (enabledFlags: string[] | undefined) => {
  if (!enabledFlags || enabledFlags.length === 0) {
    const disabledLogger = (_flag: string, _message: { toString(): string }) => {
    };
    disabledLogger.log = [] as [string, string][];
    return disabledLogger;
  }
  const chan = enabledFlags.reduce((arr, current) => {
    arr[current] = true;
    return arr;
  }, {} as Record<string, boolean>);
  const log: [string, string][] = [];
  const flagLogger = (flag: string, message: { toString(): string }) => {
    if (chan[flag]) {
      log.push([flag, message.toString()]);
    }
  };
  flagLogger.log = log;
  return flagLogger;
};

export type chanLogType = ReturnType<typeof chanLog>;
