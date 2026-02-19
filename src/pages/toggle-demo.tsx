import React from "react";
import { Toggle } from "../components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ToggleDemo() {
  const [toggles, setToggles] = React.useState({
    normal: false,
    normalChecked: true,
    disabled: false,
    disabledChecked: true,
    small: false,
    md: false,
    large: false,
  });
  const handleToggleChange = (key: string) => (pressed: boolean) => {
    setToggles((prev) => ({ ...prev, [key]: pressed }));
  };

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Toggle States</h2>
            <div className="space-y-4">
              {/* Normal State - Unchecked */}
              <div className="flex items-center gap-4">
                <Toggle
                  pressed={toggles.normal}
                  onPressedChange={handleToggleChange("normal")}
                />
                <span className="text-sm text-gray-600">
                  Normal - Unchecked
                </span>
              </div>

              {/* Normal State - Checked */}
              <div className="flex items-center gap-4">
                <Toggle
                  pressed={toggles.normalChecked}
                  onPressedChange={handleToggleChange("normalChecked")}
                />
                <span className="text-sm text-gray-600">Normal - Checked</span>
              </div>

              {/* Disabled State - Unchecked */}
              <div className="flex items-center gap-4">
                <Toggle
                  pressed={toggles.disabled}
                  onPressedChange={handleToggleChange("disabled")}
                  disabled
                />
                <span className="text-sm text-gray-600">
                  Disabled - Unchecked
                </span>
              </div>

              {/* Disabled State - Checked */}
              <div className="flex items-center gap-4">
                <Toggle
                  pressed={toggles.disabledChecked}
                  onPressedChange={handleToggleChange("disabledChecked")}
                  disabled
                />
                <span className="text-sm text-gray-600">
                  Disabled - Checked
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Toggle Sizes</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Toggle
                  size="sm"
                  pressed={toggles.small}
                  onPressedChange={handleToggleChange("small")}
                />
                <span className="text-sm text-gray-600">Small</span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  size="md"
                  pressed={toggles.md}
                  onPressedChange={handleToggleChange("md")}
                />
                <span className="text-sm text-gray-600">Default</span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  size="lg"
                  pressed={toggles.large}
                  onPressedChange={handleToggleChange("large")}
                />
                <span className="text-sm text-gray-600">Large</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Checkbox</h2>
          <div className="flex flex-col gap-4">
            <div className="text-sm text-gray-600">
              <p>Disabled checkbox</p>
            </div>
            <Checkbox externalState="checked" disabled />
            <Checkbox externalState="unchecked" disabled />
            <Checkbox externalState="indeterminate" disabled />
            <div className="text-sm text-gray-600">
              <p>Enabled checkbox</p>
            </div>
            <Checkbox externalState="checked" />
            <Checkbox externalState="unchecked" />
            <Checkbox externalState="indeterminate" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Radio</h2>
          <div className="flex flex-col gap-4">
            <div className="text-sm text-gray-600">
              <p>Enabled radio</p>
            </div>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="r1" />
                <label htmlFor="r1">Option 1</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="r2" />
                <label htmlFor="r2">Option 2</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="r3" />
                <label htmlFor="r3">Option 3</label>
              </div>
            </RadioGroup>
            <div className="text-sm text-gray-600">
              <p>Disabled radio</p>
            </div>
            <RadioGroup disabled>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled1" id="d1" />
                <label htmlFor="d1">Disabled Option 1</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled2" id="d2" />
                <label htmlFor="d2">Disabled Option 2</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
