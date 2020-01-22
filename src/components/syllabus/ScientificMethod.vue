<template>
    <div class="pa-5">
        <h3 class="heading pa-5">Scientific Method</h3>
        <ol type="I">
          <li>
            <h4 class="pa-3">Intro</h4>
            <ol type="i">
              <li>
                <v-expansion-panels flat hover focusable>
                  <v-expansion-panel>
                    <v-expansion-panel-header class="pl-0">
                      <span class="underline">Welcome to Chem 2! Your first assignment is to give me some information about you.</span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <h5>Please provide the following information on a separate sheet of paper:</h5>
                      <ol>
                        <li>Name</li>
                        <li>Code name (This can be anything of your choosing (to a limit) and will be used when posting your homework grades.)</li>
                        <li>Password (Used for accessing your detailed grade information.)</li>
                        <li>Book #</li>
                        <li>Email</li>
                        <li>Phone #</li>
                        <li>Do you have a computer at home?</li>
                        <li>What kind?</li>
                        <li>Do you have an internet connection?</li>
                        <li>Hobbies</li>
                        <li>Musical interests (I have a special interest in music and I'm always interested to hear what you like to listen to. What kind of music do you like and if you could only suggest one album for me to listen to, which would it be?)</li>
                        <li>What do you want to do with your life?</li>
                        <li>Two things I should know (Is there anything that you think I should know about you so that I can help you learn in the best possible way? Are there things in your life that might affect your performance in class that you would want me to know about? This information will stay strictly confidential.)</li>
                        <li>A story (Yes, a story. It can be anything that you like, fact or fiction, some weird dream, your fears or hopes for chemistry class, what you did for summer vacation, your most embarrassing moment, anything.)</li>
                      </ol>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li>
                <span class="handout">Handout:</span> <a class="link" href="/sci_method/notesSciMethod.pdf" target="_blank" rel="noopener"> Text Notes for this Unit</a>, <a class="link" href="/sci_method/Expectations.pdf" target="_blank" rel="noopener">Expectations</a> and <a class="link" href="/sci_method/LatePass1.pdf" target="_blank" rel="noopener">Late Passes</a>
              </li>
              <li><span class="font-weight-bold">Demo:</span> Gummy Bear Safety</li>
              <li><span class="handout">Lab: </span> <a class="link" href="/sci_method/Gold_Penny_Experiment.pdf" target="_blank" rel="noopener"> Alchemist's Dream Come True (sort of)</a></li>
              <li>
                <v-expansion-panels flat hover focusable>
                  <v-expansion-panel>
                    <v-expansion-panel-header class="pa-0">
                      <span class="underline">What is chemistry?</span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ol type="i">
                            <li>An <a class="link" href="http://levity.com/alchemy/home.html" target="_blank" rel="noopener">alchemist</a> recipe: (from "Chemistry" by Masterton, Slowinski, and Walford) 
                                <blockquote class="blockquote">
                                    "Take all the mineral salts there are, also all salts of animal and vegetable origin. Add all the metals and minerals, omitting none. Take two parts of the salts and grate in one part of the metals and minerals. Melt this in a crucible, forming a mass that reflects the essence of the world in all its colors. Pulverize this and pour vinegar over it. Pour off the red liquid into English wine bottles, filling them half-full. Seal them with the bladder of an ox (not that of a pig), Punch a hole in the top with a coarse needle. Put the bottles in hot sand for three months. Vapor will escape through the hole in the top, leaving a red powder, ..."
                                </blockquote>
                            </li>
                            <li>Why might it be hard to reproduce the alchemist's experiment as described above? Be specific.</li>
                            <li>What do you think of when you hear the word chemistry? What is chemistry?</li>
                            <li>Chemistry (a definition): the study of substances using the scientific method to understand the relationship between what can be observed in experiments and the underlying atoms and molecules which are too small to be seen.</li>
                        </ol>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li>Set up lab drawers.</li>
            </ol>
          </li>
          <li><h4 class="pa-3">Doing Science</h4></li>
        </ol>
    </div>
    
</template>
<script>
export default {
    name: 'ScientificMethod',
    methods: {
    }
}
</script>

<style scoped>
    .underline {
        text-decoration: underline;
    }

    .handout {
        color: #1B5E20;
        font-weight: bold;
    }

    .homework {
        color: #B71C1C;
    }

    .link {
        color: #0D47A1;
    }

    li {
        padding: 4px;
    }

</style>