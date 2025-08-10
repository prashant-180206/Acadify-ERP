"use client";
import React, { useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

interface SqlEditorProps {
  schema: { [table: string]: string[] }; // table → columns
  onQueryChange?: (query: string) => void;
  className: string;
}

export default function SqlEditor({
  schema,
  onQueryChange,
  className,
}: SqlEditorProps) {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorMount: OnMount = (editor, monacoInstance) => {
    editorRef.current = editor;

    // Register SQL completion items
    monacoInstance.languages.registerCompletionItemProvider("sql", {
      provideCompletionItems: () => {
        const suggestions: monaco.languages.CompletionItem[] = [];

        // ✅ Standard SQL Keywords
        const keywords = [
          "SELECT",
          "FROM",
          "WHERE",
          "GROUP BY",
          "HAVING",
          "ORDER BY",
          "INSERT INTO",
          "UPDATE",
          "DELETE",
          "JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL JOIN",
          "INNER JOIN",
          "CREATE TABLE",
          "ALTER TABLE",
          "DROP TABLE",
          "LIMIT",
          "OFFSET",
          "DISTINCT",
          "UNION",
          "EXCEPT",
          "INTERSECT",
          "AS",
          "ON",
          "IN",
          "IS",
          "NULL",
          "NOT",
          "AND",
          "OR",
          "BETWEEN",
          "LIKE",
        ];

        keywords.forEach((kw) => {
          suggestions.push({
            label: kw,
            kind: monacoInstance.languages.CompletionItemKind.Keyword,
            insertText: kw,
          } as any);
        });

        // ✅ Table names
        Object.entries(schema).forEach(([table, cols]) => {
          suggestions.push({
            label: table,
            kind: monacoInstance.languages.CompletionItemKind.Class,
            insertText: table,
          } as any);

          // ✅ Column names
          cols.forEach((col) => {
            suggestions.push({
              label: col,
              kind: monacoInstance.languages.CompletionItemKind.Field,
              insertText: col,
            } as any);
          });
        });

        return { suggestions };
      },
    });

    // Listen for query changes
    if (onQueryChange) {
      editor.onDidChangeModelContent(() => {
        onQueryChange(editor.getValue());
      });
    }
  };

  return (
    <div className={className}>
      <Editor
        height="400px"
        defaultLanguage="sql"
        theme=""
        defaultValue="SELECT * FROM users;"
        onMount={handleEditorMount}
      />
    </div>
  );
}
