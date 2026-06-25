// The reason is to keep all system prompts close to each other,
// that's allow to easily identify instruction duplicates.
// Since all system prompts are merged into one before passed to LLM,
// duplicates only creates unnecessary noise and excess token consumption.
// The other reason is to control the total size,
// cause when prompts are scattered across files, we can't see how inflated they are.
// ---------------------------


// Base description from todoWrite.ts (It should perhaps be moved here as well):
// Creates and manages a structured task list for your current coding session.
// This helps to track progress, organize complex tasks, and demonstrate thoroughness.
export const TODO_WRITE_TOOL_DESCRIPTION = `
Use it only for complex/multistep tasks; or when the user provides a list of things to be done; or when the user directly asks you to use the todo list; or when you're in doubt.
Don't use it for tasks that can be done in a few trivial steps.

Before breaking work into low-level edits, use the todo list to reflect the overall approach at a meaningful level (for example: investigate, design, implement, verify). This helps maintain a global view of the task instead of jumping between isolated local changes.
When new information changes your understanding of the task, update the todo structure to reflect the revised plan rather than only appending isolated follow-up items. The todo list should continue to represent the current overall strategy.

## Constraints
- Allowed task states are: pending, in_progress and completed.
- Only one task can be in_progress at a time.

## Requirements
- You must update task status in real-time as you work.
- Mark task as in_progress BEFORE beginning work.
- Mark task complete IMMEDIATELY after finishing and only when you have FULLY accomplished it.
- Complete current task before starting new one.
- Remove tasks that are no longer relevant from the list entirely.
- Use clear, descriptive task names


## Example of When to Use the Todo List
<example>
User: Help me rename the function getCwd to getCurrentWorkingDirectory across my project
Assistant: Let me first search through your codebase to find all occurrences of 'getCwd'.
*Uses grep or search tools to locate all instances of getCwd in the codebase*
Assistant: I've found 15 instances of 'getCwd' across 8 different files. Let me create a todo list to track these changes.
*Creates todo list with specific items for each file that needs updating*

<reasoning>
The assistant used the todo list because:
1. First, the assistant searched to understand the scope of the task
2. Upon finding multiple occurrences across different files, it determined this was a complex task with multiple steps
3. The todo list helps ensure every instance is tracked and updated systematically
4. This approach prevents missing any occurrences and maintains code consistency
</reasoning>
</example>


## Example of When NOT to Use the Todo List
<example>
User: Can you add a comment to the calculateTotal function to explain what it does?
Assistant: Sure!
* Uses the Edit tool to add a comment *

<reasoning>
Adding a comment doesn't require tracking multiple steps or systematic organization.
</reasoning>
</example>
`

