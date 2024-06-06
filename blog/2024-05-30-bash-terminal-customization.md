---
slug: bash-terminal-customization
title: Bash terminal customization
authors: anand
tags: [wsl, linux, ubuntu, git, bash]
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

## <Highlight color='#800031' highlight='fg' fontWeight='bold'> Linux Shells </Highlight>

When we open up our terminal, chances are that it uses Bash as its UNIX shell environment. But other **shell** environments exist such as the C Shell, Korn Shell, Z Shell, and even the Fish Shell. All of these different shell environments have their own pros and cons, and you should consider them before you choose one to use on your own system.

<!--truncate-->

1. The <Highlight color='#25c2a0'> Bash </Highlight> Shell (or the **B**ourne **A**gain **Sh**ell) is a UNIX shell and command language. It was written by Brain Fox for the GNU Project as a free software replacement for the Bourne Shell (**sh**). 

    * It was first released in 1989. Bash is one of the first programs that Linus Torvalds (the creator of Linux) ported to Linux.

    * User configuration settings are in `.bashrc` (short for **bash** **r**ead **c**ommand).

    * Something you should not get confused about is that Bash is also a programming language. So it's a "Shell", but you can also program behavior in Bash. For example:

		```sh
		#!/bin/bash
		echo "Hello World"
		```

2. The <Highlight color='#25c2a0'> Z Shell </Highlight>, or <Highlight color='#25c2a0'> Zsh </Highlight> is also a UNIX shell that is very similar to Bash. Zsh is an extension of the Bourne shell with a lot of improvements. Zsh was released in 1990 by Paul Falstad, and it has some features that Bash, Korn Shell, and C Shell share.

    * The name zsh derives from the name of Yale professor **Z**hong **Sh**ao (then a teaching assistant at Princeton University) – Paul Falstad regarded Shao's login-id, <Highlight color='#25c2a0'> zsh </Highlight>, as a good name for a shell
    * macOS by default uses the Zsh Shell.
    * Zshell Supports plugins and themes. Here's a [list of plugins](https://github.com/unixorn/awesome-zsh-plugins) available for Zsh.
    * There are also frameworks built around the Z Shell. One of the most popular ones is [Oh My Zsh](https://ohmyz.sh/), which is a community driven, open-source framework for managing Zsh configuration.

3. <Highlight color='#25c2a0'> Fish </Highlight>, the **F**riendly **I**nteractive **SH**ell, is a more recent addition to the world of shell environments. It prioritizes user-friendliness and simplicity, making it a great choice for newcomers to programming. It was created by Axel Liljencrantz in 2005.

### <Highlight color='#004080' highlight='fg' fontWeight='bold'> Install Fish or Zsh on Ubuntu </Highlight>

1. Update the package source list and updates all the packages presently installed

		```sh
		sudo apt update && sudo apt upgrade
		```
2. Install fish/zsh

		```sh
		# install fish
		sudo apt install fish
		# install z shell
		sudo apt install zsh
		```
3. Verify the installed version of the shell

		```sh
		zsh --version
		# zsh 5.8.1 (x86_64-ubuntu-linux-gnu)
		bash --version
		# GNU bash, version 5.1.16(1)-release (x86_64-pc-linux-gnu)
		fish --version
		# fish, version 3.3.1
		```

    <Highlight color='#25c2a0'> GNU </Highlight> is a recursive acronym for <Highlight color='#004080' highlight='fg' fontWeight='bold'> GNU's Not Unix! </Highlight>

4. Set fish or zsh or bash as your default shell.

		```sh
		# for fish
		chsh -s $(which fish)
		# for zsh
		chsh -s $(which zsh)
		# for bash
		chsh -s $(which bash)
		```
		
		Restart the terminal window and check the current shell by `echo $SHELL`.

## <Highlight color='#800031' highlight='fg' fontWeight='bold'> Current git branch name to bash shell in Ubuntu (WSL) </Highlight>

Make your life easier as a developer and know the current branch in your workspace without complications. And the best? Without installing anything additional!

1. Open the `bashrc` file and look for the variable `$PS1`, which is the enviroment variable that store the default prompt setting we see every time when we log in the console.

```bash
cat ~/.bashrc
```

<details>
  <summary>`.bashrc` File sample</summary>
  <div>
```sh title="~/.bashrc"
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
        # We have color support; assume it's compliant with Ecma-48
        # (ISO/IEC-6429). (Lack of such support is extremely rare, and such
        # a case would tend to support setf rather than setaf.)
        color_prompt=yes
    else
        color_prompt=
    fi
fi

# highlight-start
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt
# highlight-end

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/actionanand/miniconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/home/actionanand/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/home/actionanand/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/actionanand/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

conda activate wsl2
```
  </div>
</details>

2. edit the `.bashrc` file as shown below under **New Bashrc** tab using your editor such as nano, vi, vim, etc and save

	```sh
	nano ~/.bashrc
	```

<Tabs>
  <TabItem value="default" label="Default Bashrc" default>
```sh
if [ "$color_prompt" = yes ]; then
# highlight-next-line
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
# highlight-next-line
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt
```
  </TabItem>
  <TabItem value="modified" label="New Bashrc">
```bash
# highlight-start
# git branch info if present
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
# highlight-end

if [ "$color_prompt" = yes ]; then
# highlight-next-line
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[35m\]$(parse_git_branch)\[\033[36m\]\$\[\033[00m\] '
else
# highlight-next-line
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi
unset color_prompt force_color_prompt
```
  </TabItem>
</Tabs>

3. To apply the settings, it is necessary to reload the file. We can do this by restarting the terminal or simply reloading the configuration file as below:

```sh
source ~/.bashrc
```

### Values in PS1

| **Code** | **Action**                                                         |
|----------|--------------------------------------------------------------------|
| \u       | User currently logged on the machine;                              |
| \h       | Name of the machine (host), previously registered;                 |
| \H       | Full machine name, previously registered;                          |
| \w       | Full current working directory;                                    |
| \W       | Minified current working directory, base name only (last segment); |

### Color code

|       Color       |     Code     |
|-------------------|--------------|
| Default (Reset)   | [\033[00m]   |
| Red               | [\033[0;31m] |
| Fluorescent Red   | [\033[1;31m] |
| Green             | [\033[0;32m] |
| Fluorescent Green | [\033[1;32m] |
| Yellow            | [\033[0;33m] |
| Blue              | [\033[0;34m] |
| Magenta           | [\033[0;35m] |
| Cyan              | [\033[0;36m] |
| Gray              | [\033[0;37m] |
| Strong White      | [\033[1;37m] |
