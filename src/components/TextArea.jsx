export default function TextArea({ label, value, onChange, editable }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-neutral-400">{label}</label>
      <textarea
        className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 min-h-50 resize-none"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={!editable}
      />
    </div>
  );
}
