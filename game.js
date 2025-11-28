// Game State
const gameState = {
    hope: 0,
    skills: [],
    currentScene: 'start',
    choices: []
};

// Game Scenes - Interactive Narrative
const scenes = {
    start: {
        text: `You wake up to another day. The weight on your chest feels heavier than yesterday. Your mind whispers familiar lies: "What's the point? Nothing will get better."

        But something inside you—maybe just a spark—made you wake up today. That matters.`,
        choices: [
            {
                text: "I don't know if I can do this anymore...",
                next: 'dark_moment',
                hope: 5
            },
            {
                text: "Maybe today could be different... even just a little",
                next: 'small_hope',
                hope: 10,
                skill: 'Hope'
            }
        ]
    },

    dark_moment: {
        text: `The darkness feels overwhelming. Depression tells you there's no way forward, that this pain is forever.

        But depression is a liar. What it tells you isn't truth—it's illness speaking.

        Right now, you have a choice. Not an easy one, but a choice nonetheless.`,
        choices: [
            {
                text: "Reach out to someone, anyone, even though it feels impossible",
                next: 'reach_out',
                hope: 15,
                skill: 'Reaching Out'
            },
            {
                text: "Try a small coping strategy I've learned before",
                next: 'coping_skills',
                hope: 12,
                skill: 'Self-Care'
            },
            {
                text: "Just survive this moment. That's enough for now.",
                next: 'survival_mode',
                hope: 8,
                skill: 'Resilience'
            }
        ]
    },

    small_hope: {
        text: `You decide to give today a chance. Maybe you'll take a shower. Maybe you'll eat something. Maybe you'll just open the curtains.

        Small steps aren't weakness—they're courage.`,
        choices: [
            {
                text: "I'll try one small thing to take care of myself",
                next: 'self_care',
                hope: 15,
                skill: 'Self-Compassion'
            },
            {
                text: "I'll reach out to someone who cares",
                next: 'reach_out',
                hope: 18,
                skill: 'Connection'
            }
        ]
    },

    reach_out: {
        text: `Reaching out when you're in darkness takes incredible strength. You pick up your phone, your hands shaking.

        You text a friend: "I'm not okay."

        Three dots appear. Then: "I'm here. I'm listening. You matter to me."

        The darkness doesn't disappear, but you're no longer alone in it.`,
        choices: [
            {
                text: "Tell them what I'm going through",
                next: 'sharing_burden',
                hope: 20,
                skill: 'Vulnerability'
            },
            {
                text: "Ask if we can talk or just be together",
                next: 'together',
                hope: 22,
                skill: 'Support Network'
            },
            {
                text: "Thank them and say I might need professional help",
                next: 'seeking_help',
                hope: 25,
                skill: 'Help-Seeking'
            }
        ]
    },

    coping_skills: {
        text: `You remember things that have helped before, even just a little. Deep breathing. Grounding techniques. Taking a walk. Holding ice cubes.

        These aren't cures, but they're tools. And right now, you need tools.

        You try the 5-4-3-2-1 grounding technique: 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.

        It helps. Just a little. And a little is enough.`,
        choices: [
            {
                text: "Keep using grounding techniques when I feel overwhelmed",
                next: 'building_toolbox',
                hope: 18,
                skill: 'Grounding'
            },
            {
                text: "Combine this with reaching out to someone",
                next: 'reach_out',
                hope: 20,
                skill: 'Multiple Strategies'
            },
            {
                text: "Look into learning more coping strategies",
                next: 'seeking_help',
                hope: 22,
                skill: 'Active Learning'
            }
        ]
    },

    survival_mode: {
        text: `Sometimes survival is victory. Sometimes "I'm still here" is enough of an achievement.

        You don't have to be productive. You don't have to be positive. You just have to be.

        Every moment you survive is a moment you're winning against the darkness.`,
        choices: [
            {
                text: "I'll be gentle with myself. Surviving is enough.",
                next: 'self_compassion',
                hope: 15,
                skill: 'Self-Acceptance'
            },
            {
                text: "But I also know I might need more support than this",
                next: 'seeking_help',
                hope: 20,
                skill: 'Self-Awareness'
            },
            {
                text: "I'll try one small thing to make this moment easier",
                next: 'self_care',
                hope: 16,
                skill: 'Gentle Action'
            }
        ]
    },

    self_care: {
        text: `Self-care isn't selfish. It's not bubble baths and face masks (though those are fine too).

        Real self-care is: taking your medication. Eating when you can. Resting. Setting boundaries. Asking for help.

        You choose one small act of self-care today. Just one. That's enough.`,
        choices: [
            {
                text: "I'll make sure I eat something today",
                next: 'nourishment',
                hope: 15,
                skill: 'Basic Needs'
            },
            {
                text: "I'll try to get some rest or regulate my sleep",
                next: 'rest',
                hope: 15,
                skill: 'Sleep Hygiene'
            },
            {
                text: "I'll step outside, even just for a moment",
                next: 'outside',
                hope: 18,
                skill: 'Nature Connection'
            }
        ]
    },

    sharing_burden: {
        text: `You share what you've been carrying. The pain. The exhaustion. The thoughts that scare you.

        Your friend listens. Really listens. They don't try to fix you. They don't tell you to "just be positive."

        They say: "Thank you for trusting me. You don't have to carry this alone."

        And for the first time in a while, you feel a tiny bit lighter.`,
        choices: [
            {
                text: "I want to explore professional support",
                next: 'seeking_help',
                hope: 25,
                skill: 'Professional Help'
            },
            {
                text: "I'll work with my friend to create a safety plan",
                next: 'safety_plan',
                hope: 23,
                skill: 'Crisis Planning'
            },
            {
                text: "I'll focus on building my support network",
                next: 'community',
                hope: 20,
                skill: 'Community Building'
            }
        ]
    },

    together: {
        text: `Your friend comes over. Or you meet them somewhere safe. Or you video call.

        You don't have to talk if you don't want to. Sometimes presence is enough.

        They stay with you. They remind you that you matter. That this pain is temporary. That help exists.

        Connection is medicine.`,
        choices: [
            {
                text: "I want to understand my options for getting professional help",
                next: 'seeking_help',
                hope: 24,
                skill: 'Treatment Options'
            },
            {
                text: "I'll work on building more connections like this",
                next: 'community',
                hope: 21,
                skill: 'Relationship Building'
            }
        ]
    },

    seeking_help: {
        text: `Seeking professional help isn't giving up. It's fighting back.

        Depression is a medical condition. You wouldn't tell someone with diabetes to just "think positive." The same applies here.

        Treatment options exist: therapy (CBT, DBT, others), medication, support groups, crisis intervention, partial hospitalization, and more.

        Finding the right help might take time, but it's worth it. You're worth it.`,
        choices: [
            {
                text: "I'll look into therapy options",
                next: 'therapy',
                hope: 30,
                skill: 'Therapy'
            },
            {
                text: "I'll talk to a doctor about my options",
                next: 'medical_help',
                hope: 30,
                skill: 'Medical Support'
            },
            {
                text: "I'll find a support group with people who understand",
                next: 'support_group',
                hope: 28,
                skill: 'Peer Support'
            },
            {
                text: "I need immediate crisis support right now",
                next: 'crisis_support',
                hope: 25,
                skill: 'Crisis Resources'
            }
        ]
    },

    self_compassion: {
        text: `You've been so hard on yourself. Depression makes you believe you're weak, broken, a burden.

        None of that is true.

        You're ill, not inadequate. You're struggling, not failing. You're hurting, not hopeless.

        Treat yourself with the kindness you'd show a friend in pain.`,
        choices: [
            {
                text: "I'll practice talking to myself more gently",
                next: 'building_toolbox',
                hope: 20,
                skill: 'Self-Kindness'
            },
            {
                text: "I'll seek help to learn more about self-compassion",
                next: 'seeking_help',
                hope: 24,
                skill: 'Therapeutic Skills'
            }
        ]
    },

    building_toolbox: {
        text: `Recovery isn't linear. Some days you'll use all your tools. Some days just getting out of bed is the victory.

        Your toolbox is growing:
        • Grounding techniques
        • Reaching out
        • Self-compassion
        • Recognizing you deserve help

        Each tool makes the next hard moment a little more survivable.`,
        choices: [
            {
                text: "I want to add professional support to my toolbox",
                next: 'seeking_help',
                hope: 28,
                skill: 'Comprehensive Care'
            },
            {
                text: "I'll keep practicing and building on what helps",
                next: 'progress',
                hope: 25,
                skill: 'Skill Building'
            }
        ]
    },

    nourishment: {
        text: `You eat something. Maybe it's just crackers. Maybe it's a full meal. Either way, you nourished your body.

        Depression makes even basic tasks feel impossible. But you did it anyway.

        That's strength.`,
        choices: [
            {
                text: "I'll try to build more self-care habits",
                next: 'building_toolbox',
                hope: 20,
                skill: 'Daily Routine'
            },
            {
                text: "I realize I need support to make these things easier",
                next: 'seeking_help',
                hope: 22,
                skill: 'Asking for Help'
            }
        ]
    },

    rest: {
        text: `Sleep and depression have a complicated relationship. Sometimes you sleep too much. Sometimes not at all.

        You prioritize rest today. Whether that means allowing yourself to sleep, or trying to establish a routine, you're caring for your body.

        Rest is productive. Rest is healing.`,
        choices: [
            {
                text: "I'll work on building more healthy habits",
                next: 'building_toolbox',
                hope: 19,
                skill: 'Routine Building'
            },
            {
                text: "I want help creating better sleep and daily patterns",
                next: 'seeking_help',
                hope: 23,
                skill: 'Professional Guidance'
            }
        ]
    },

    outside: {
        text: `You step outside. The sun (or clouds, or rain, or night) greets you. Fresh air fills your lungs.

        Nature doesn't cure depression, but it can help. Even for five minutes.

        The world is still here. And so are you.`,
        choices: [
            {
                text: "I'll try to get outside regularly as part of my routine",
                next: 'building_toolbox',
                hope: 22,
                skill: 'Nature Therapy'
            },
            {
                text: "This helps, but I know I need more comprehensive support",
                next: 'seeking_help',
                hope: 25,
                skill: 'Holistic Care'
            }
        ]
    },

    safety_plan: {
        text: `You and your friend create a safety plan together:

        1. Warning signs to watch for
        2. Coping strategies that help you
        3. People you can reach out to
        4. Places that are safe
        5. Crisis numbers to call
        6. Ways to make your environment safer

        This plan isn't about giving up—it's about making sure you stay here to see the better days ahead.`,
        choices: [
            {
                text: "I'll share this plan with a mental health professional",
                next: 'seeking_help',
                hope: 30,
                skill: 'Safety Planning'
            },
            {
                text: "I'll focus on building my support network further",
                next: 'community',
                hope: 27,
                skill: 'Support Systems'
            }
        ]
    },

    community: {
        text: `You start building a network of support. Not just one person, but multiple people. Different types of support.

        Some people are good listeners. Some make you laugh. Some just sit with you in the darkness.

        You also discover communities—online forums, local support groups, people who truly understand.

        You're not alone. You never were. You just couldn't see it through the fog.`,
        choices: [
            {
                text: "I'll combine this community with professional help",
                next: 'seeking_help',
                hope: 32,
                skill: 'Multi-Layered Support'
            },
            {
                text: "I'll continue building connections and healing",
                next: 'progress',
                hope: 30,
                skill: 'Social Healing'
            }
        ]
    },

    therapy: {
        text: `You find a therapist. Maybe not the first one you try. Maybe it takes a few attempts. That's okay.

        In therapy, you learn:
        • Your thoughts aren't facts
        • You can challenge the voice of depression
        • Skills to manage overwhelming emotions
        • That healing is possible

        Therapy isn't magic. It's work. Hard work. But you're worth the effort.`,
        choices: [
            {
                text: "I'll commit to the therapeutic process",
                next: 'healing_journey',
                hope: 40,
                skill: 'Committed to Healing'
            },
            {
                text: "I'll explore if medication might help too",
                next: 'medical_help',
                hope: 38,
                skill: 'Combined Treatment'
            }
        ]
    },

    medical_help: {
        text: `You talk to a doctor. You discuss your symptoms honestly. They help you understand that depression is a medical condition.

        There are many treatment options: different types of therapy, various medications, lifestyle changes, and more.

        Finding the right treatment might take time. That's normal. Don't give up.

        Medication isn't a weakness—it's medicine. Just like insulin for diabetes.`,
        choices: [
            {
                text: "I'll work with medical professionals on my treatment plan",
                next: 'healing_journey',
                hope: 40,
                skill: 'Medical Treatment'
            },
            {
                text: "I'll combine medical treatment with therapy",
                next: 'therapy',
                hope: 42,
                skill: 'Comprehensive Treatment'
            }
        ]
    },

    support_group: {
        text: `You join a support group. A room (or virtual space) full of people who get it.

        No one tells you to "just be positive." No one says "it could be worse."

        These people understand. They've been in the darkness too. Some are still there. Some have found their way toward the light.

        Their stories give you hope: Recovery is possible. You can survive this. You're not alone.`,
        choices: [
            {
                text: "I'll add professional treatment to this peer support",
                next: 'therapy',
                hope: 35,
                skill: 'Peer + Professional Support'
            },
            {
                text: "I'll continue with the group and build my recovery",
                next: 'progress',
                hope: 33,
                skill: 'Group Support'
            }
        ]
    },

    crisis_support: {
        text: `You recognize you need immediate help. That's not weakness—that's wisdom.

        Crisis hotlines: Trained professionals available 24/7
        Crisis text lines: If talking feels too hard
        Emergency rooms: When you need immediate safety
        Mobile crisis teams: Can come to you

        These resources exist because you matter. Because people want you to stay. Because this pain is temporary and help is available.

        You reach out. Someone answers. You're not alone.`,
        choices: [
            {
                text: "I'll work with crisis professionals to create a safety plan",
                next: 'safety_plan',
                hope: 30,
                skill: 'Crisis Intervention'
            },
            {
                text: "I'll explore ongoing treatment options after this crisis",
                next: 'seeking_help',
                hope: 32,
                skill: 'Continuing Care'
            }
        ]
    },

    progress: {
        text: `Time passes. Not smoothly. Not easily.

        You have bad days. Really bad days. But you also have okay days. Sometimes even good moments.

        You've built a toolbox. You have support. You're learning that depression lies.

        Recovery isn't linear. But it's happening.

        You're still here. And that matters more than you know.`,
        choices: [
            {
                text: "I want to deepen my recovery with professional support",
                next: 'healing_journey',
                hope: 45,
                skill: 'Ongoing Growth'
            },
            {
                text: "I'll continue building on the progress I've made",
                next: 'continued_healing',
                hope: 42,
                skill: 'Sustained Recovery'
            }
        ]
    },

    healing_journey: {
        text: `You're in treatment now. Therapy, maybe medication, support groups, healthy habits—you're doing the work.

        Some days are still hard. Recovery isn't a straight line upward.

        But you notice changes:
        • The darkness isn't as heavy
        • You have tools that help
        • You can imagine a future
        • You're learning to challenge depressive thoughts
        • You have people who support you

        You're not "cured"—that's not how this works. But you're healing. You're living, not just surviving.`,
        choices: [
            {
                text: "I'll keep moving forward on this journey",
                next: 'continued_healing',
                hope: 50,
                skill: 'Hope for the Future'
            }
        ]
    },

    continued_healing: {
        text: `Months pass. The person you are now would amaze the person you were at your lowest.

        You still have hard days. You always will. But now you have:
        • Tools that help
        • People who care
        • Experience surviving the darkness
        • Knowledge that it does get better
        • Hope

        You might even help someone else someday. Share your story. Be the hope someone else needs.

        The thoughts of ending your life? They still whisper sometimes. But they're not the loudest voice anymore.

        You chose to stay. You chose to fight. You chose yourself.

        And the world is better because you're in it.`,
        choices: [
            {
                text: "Reflect on my journey and resources I've found",
                next: 'ending',
                hope: 60,
                skill: 'Survivor'
            }
        ]
    },

    ending: {
        text: `This is just one possible journey. Yours will be different. And that's okay.

        What matters:
        • You deserve help
        • Recovery is possible
        • You are not alone
        • Death is not the only option—it's never the only option
        • There are people who want you to stay
        • Treatment works
        • You matter

        If you're struggling right now, please reach out:
        • Call or text 988 (US Suicide & Crisis Lifeline)
        • Text "HELLO" to 741741 (Crisis Text Line)
        • Visit findahelpline.com for international resources
        • Tell someone you trust
        • Go to an emergency room if you're in immediate danger

        This game is just a story. But your life? Your life can have so many more chapters.

        Please stay to read them.`,
        choices: [
            {
                text: "Start a new journey",
                next: 'start',
                hope: 0,
                reset: true
            },
            {
                text: "View Crisis Resources",
                next: 'resources_final',
                hope: 0
            }
        ]
    },

    resources_final: {
        text: `🆘 CRISIS RESOURCES 🆘

        If you or someone you know is in crisis:

        🇺🇸 United States: 988 Suicide & Crisis Lifeline (call or text)
        📱 Text "HELLO" to 741741 (Crisis Text Line)

        🇬🇧 UK: 116 123 (Samaritans) or text "SHOUT" to 85258
        🇨🇦 Canada: 1-833-456-4566 or text "TALK" to 686868
        🇦🇺 Australia: 13 11 14 (Lifeline)
        🌍 International: findahelpline.com

        Treatment options:
        • Therapy (CBT, DBT, etc.)
        • Medication
        • Support groups
        • Intensive outpatient programs
        • Inpatient treatment if needed

        Remember: Depression is treatable. You deserve help. Recovery is possible.`,
        choices: [
            {
                text: "Start a new journey",
                next: 'start',
                hope: 0,
                reset: true
            }
        ]
    }
};

// Initialize Game
function initGame() {
    updateHopeMeter();
    updateSkills();
    displayScene(gameState.currentScene);

    // Support button handler
    document.getElementById('support-button').addEventListener('click', showSupportModal);

    // Modal close handler
    document.querySelector('.modal-close').addEventListener('click', hideSupportModal);
}

// Display Scene
function displayScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) {
        console.error('Scene not found:', sceneId);
        return;
    }

    gameState.currentScene = sceneId;

    // Update story text
    const storyText = document.getElementById('story-text');
    storyText.textContent = scene.text;

    // Update choices
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        if (choice.skill || choice.hope >= 15) {
            button.classList.add('positive');
        }
        button.textContent = choice.text;
        button.addEventListener('click', () => makeChoice(choice));

        // Stagger animation
        setTimeout(() => {
            button.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 100);

        choicesContainer.appendChild(button);
    });

    // Update background based on hope level
    updateBackground();
}

// Make Choice
function makeChoice(choice) {
    // Reset game if needed
    if (choice.reset) {
        gameState.hope = 0;
        gameState.skills = [];
        gameState.choices = [];
        updateHopeMeter();
        updateSkills();
    }

    // Add to choices history
    gameState.choices.push(choice.text);

    // Increase hope
    if (choice.hope) {
        gameState.hope = Math.min(100, gameState.hope + choice.hope);
        updateHopeMeter();
    }

    // Add skill
    if (choice.skill && !gameState.skills.includes(choice.skill)) {
        gameState.skills.push(choice.skill);
        updateSkills();
    }

    // Move to next scene
    setTimeout(() => {
        displayScene(choice.next);
    }, 300);
}

// Update Hope Meter
function updateHopeMeter() {
    const hopeFill = document.getElementById('hope-meter-fill');
    const hopeValue = document.getElementById('hope-value');

    hopeFill.style.width = gameState.hope + '%';
    hopeValue.textContent = gameState.hope;

    // Add glow effect at high hope
    if (gameState.hope >= 50) {
        hopeFill.classList.add('glow');
    } else {
        hopeFill.classList.remove('glow');
    }
}

// Update Skills Display
function updateSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';

    gameState.skills.forEach(skill => {
        const badge = document.createElement('div');
        badge.className = 'skill-badge';
        badge.textContent = '🌟 ' + skill;
        skillsList.appendChild(badge);
    });
}

// Update Background
function updateBackground() {
    const body = document.body;
    body.classList.remove('hopeful', 'light');

    if (gameState.hope >= 50) {
        body.classList.add('light');
    } else if (gameState.hope >= 25) {
        body.classList.add('hopeful');
    }
}

// Modal Functions
function showSupportModal() {
    document.getElementById('support-modal').classList.remove('hidden');
}

function hideSupportModal() {
    document.getElementById('support-modal').classList.add('hidden');
}

// Start Game
document.addEventListener('DOMContentLoaded', initGame);

// Prevent accidental page close
window.addEventListener('beforeunload', (e) => {
    if (gameState.hope > 0 && gameState.currentScene !== 'ending' && gameState.currentScene !== 'resources_final') {
        e.preventDefault();
        e.returnValue = 'Your progress will be lost. Are you sure you want to leave?';
        return e.returnValue;
    }
});
