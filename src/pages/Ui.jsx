export const Ui = () => {
  return (
    <div className="flex flex-col gap-4 items-center my-40">
      <div className="flex flex-row gap-4">
        <div className="text-center">
          <h2>
            Color primario light: <b>#6b46c1</b>
          </h2>
          <div className="w-100 h-100 bg-primary-light"></div>
        </div>
        <div>
          <h2>
            Color primario accent: <b>#f59e0b</b>
          </h2>
          <div className="w-100 h-100 bg-primary-accent"></div>
        </div>
        <div>
          <h2>
            Color primario dark: <b>#1f2937</b>
          </h2>
          <div className="w-100 h-100 bg-primary-dark"></div>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div>
          <h2>
            Color Secundario light: <b>#ddd6fe</b>
          </h2>
          <div className="w-100 h-100 bg-secondary-light"></div>
        </div>
        <div>
          <h2>
            Color Secundario accent: <b>#ffffff</b>
          </h2>
          <div className="w-100 h-100 bg-secondary-accent"></div>
        </div>
        <div>
          <h2>
            Color Secundario dark: <b>#6b7280</b>
          </h2>
          <div className="w-100 h-100 bg-secondary-dark"></div>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div>
          <h2>
            Color estado success: <b>#10b981</b>
          </h2>
          <div className="w-100 h-100 bg-state-success"></div>
        </div>
        <div>
          <h2>
            Color estado warning: <b>#f59e0b</b>
          </h2>
          <div className="w-100 h-100 bg-state-warning"></div>
        </div>
        <div>
          <h2>
            Color estado danger: <b>#ef4444</b>
          </h2>
          <div className="w-100 h-100 bg-state-danger"></div>
        </div>
        <div>
          <h2>
            Color estado info: <b>#3b82f6</b>
          </h2>
          <div className="w-100 h-100 bg-state-info"></div>
        </div>
      </div>
    </div>
  );
};
