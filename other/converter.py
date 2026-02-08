from converter_setup import ChatPollinations
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate

"""
This is the code that converted my java to js because java cannot work in the browser. Pollinations is my AI model provider and gemini-fast is the model
that did the coverting. The logic is mine and I handcoded it in java but I did not excpect that I would put in on the web in the future, and I tried cheerpj but it
failed so this was my last resort. But  I did handcode the converting system myself, and it works fine and I used it to convert my source code.
"""

llm = ChatPollinations(model="gemini-fast")


original_java = """


package apps.random_matrix;

public class random_matrix {
    public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] random_array = random2Darray(8, 99);
		System.out.print("\nSum: " + return_sum(random_array));
		System.out.print("\nAverage: " + (return_sum(random_array)) / (4 * 5 * 1.0));
	}

	public static int[][] random2Darray(int r, int c) {
		int[][] result = new int[r][c];
		for (int n = 0; n < result.length; n++) {
			for (int m = 0; m < c; m++) {
				result[n][m] = (int)(Math.random() * 100);
				System.out.print(result[n][m] + " ");
			}
			System.out.println();
		}
		return result;
	}
	
	public static int return_sum(int[][] array) {
		int sum = 0;
		for (int[] e: array) {
			for (int n: e) {
				sum += n;
			}
		}
		return sum;
	}
}


"""

js_prompt = PromptTemplate.from_template("""
Convert this Java console program to JavaScript. Rules:
- Remove imports, class declarations, public/private/static keywords
- Convert Scanner input to prompt() with clear messages
- Convert all types (int, String, double, boolean, arrays) to "let"
- Convert System.out.println() to both console.log() and displayOutput()
- Convert System.out.print() to displayOutput()
- Keep all logic identical

Add this at the top:
let outputDiv = null;
function initOutput() {{
    if (!outputDiv) {{
        outputDiv = document.createElement('div');
        outputDiv.id = 'gameOutput';
        outputDiv.style.cssText = 'background:#1e1e1e;color:#00ff00;font-family:monospace;padding:20px;margin:20px;border-radius:8px;white-space:pre-wrap;max-height:600px;overflow-y:auto;';
        document.body.appendChild(outputDiv);
    }}
}}
function displayOutput(text) {{
    initOutput();
    outputDiv.textContent += text + '\n';
}}
window.addEventListener('DOMContentLoaded', () => {{
    initOutput();
    main();
}});
                                        
Return ONLY the JavaScript code, here is the Java code:
\n{code}""")
java_to_js = js_prompt | llm | StrOutputParser()

hm = """
Create an HTML file for this JavaScript game. Requirements:
- Minimalistic white background, blue (#2563eb) and orange (#f97316) accents
- Extract game title from the main function name in the JS (e.g., "ticTacToe" becomes "Tic Tac Toe")
- Centered header with game title
- "Back to Menu" button (orange, links to ../index.html)
- Script tag loads the same filename but with .js extension
- Clean, simple CSS with no animations

Return ONLY the HTML code, here is the JavaScript code: 
\n{code}"""
html_prompt = PromptTemplate.from_template(hm)
js_to_html = html_prompt | llm | StrOutputParser()

js = java_to_js.invoke({"code": original_java})
print(js)

html = js_to_html.invoke({"code": js})
print(html)
