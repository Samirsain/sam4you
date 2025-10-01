"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Instagram, User, Hash, Copy, Download, RefreshCw, Sparkles, Zap, Heart, Star, Users, AtSign } from "lucide-react"
import Link from "next/link"

interface BioRequest {
  name: string
  profession: string
  interests: string
  tone: string
  includeEmojis: boolean
  includeHashtags: boolean
  callToAction: string
}

interface NameRequest {
  category: string
  style: string
  length: string
  language: string
}

interface UsernameRequest {
  name: string
  category: string
  style: string
  includeNumbers: boolean
  includeUnderscores: boolean
}

interface GeneratedBio {
  bio: string
  hashtags: string[]
  characterCount: number
}

interface GeneratedNames {
  names: string[]
  category: string
}

interface GeneratedUsernames {
  usernames: string[]
  availability: { [key: string]: boolean }
}

const professions = [
  'Content Creator', 'Photographer', 'Artist', 'Fashion Designer', 'Chef', 'Fitness Trainer',
  'Travel Blogger', 'Business Owner', 'Influencer', 'Model', 'Musician', 'Writer',
  'Entrepreneur', 'Coach', 'Teacher', 'Developer', 'Designer', 'Other'
]

const tones = [
  'Professional', 'Casual', 'Funny', 'Motivational', 'Creative', 'Elegant', 'Bold', 'Friendly'
]

const callToActions = [
  'Follow for daily inspiration!',
  'DM for collaborations!',
  'Link in bio!',
  'Let\'s connect!',
  'Check out my latest post!',
  'Swipe up for more!',
  'Custom CTA'
]

const nameCategories = [
  'Business', 'Personal Brand', 'Creative', 'Tech', 'Fashion', 'Food', 'Travel', 'Fitness', 'Beauty', 'Music'
]

const nameStyles = [
  'Modern', 'Classic', 'Creative', 'Professional', 'Trendy', 'Unique', 'Simple', 'Elegant'
]

const nameLengths = ['Short (1-2 words)', 'Medium (2-3 words)', 'Long (3+ words)']

const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Hindi', 'Arabic']

const usernameStyles = [
  'Simple', 'Creative', 'Professional', 'Trendy', 'Unique', 'Memorable', 'Brandable'
]

export default function InstagramToolsPage() {
  const [activeTab, setActiveTab] = useState<'bio' | 'name' | 'username'>('bio')
  
  // Bio Generator State
  const [bioRequest, setBioRequest] = useState<BioRequest>({
    name: '',
    profession: 'Content Creator',
    interests: '',
    tone: 'Professional',
    includeEmojis: true,
    includeHashtags: true,
    callToAction: 'Follow for daily inspiration!'
  })
  const [isGeneratingBio, setIsGeneratingBio] = useState(false)
  const [generatedBio, setGeneratedBio] = useState<GeneratedBio | null>(null)
  const [bioError, setBioError] = useState("")

  // Name Suggestion State
  const [nameRequest, setNameRequest] = useState<NameRequest>({
    category: 'Personal Brand',
    style: 'Modern',
    length: 'Medium (2-3 words)',
    language: 'English'
  })
  const [isGeneratingNames, setIsGeneratingNames] = useState(false)
  const [generatedNames, setGeneratedNames] = useState<GeneratedNames | null>(null)
  const [nameError, setNameError] = useState("")

  // Username Suggestion State
  const [usernameRequest, setUsernameRequest] = useState<UsernameRequest>({
    name: '',
    category: 'Personal',
    style: 'Simple',
    includeNumbers: false,
    includeUnderscores: false
  })
  const [isGeneratingUsernames, setIsGeneratingUsernames] = useState(false)
  const [generatedUsernames, setGeneratedUsernames] = useState<GeneratedUsernames | null>(null)
  const [usernameError, setUsernameError] = useState("")

  const generateBio = async () => {
    if (!bioRequest.name.trim()) {
      setBioError("Please enter your name")
      return
    }

    setIsGeneratingBio(true)
    setBioError("")
    setGeneratedBio(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockBio = generateMockBio(bioRequest)
      setGeneratedBio(mockBio)
    } catch (err) {
      setBioError("Failed to generate bio. Please try again.")
    } finally {
      setIsGeneratingBio(false)
    }
  }

  const generateMockBio = (req: BioRequest): GeneratedBio => {
    const emojis = req.includeEmojis ? ['✨', '🌟', '💫', '🎯', '🚀', '💪', '❤️', '🔥', '⭐', '🎨'] : []
    const selectedEmojis = emojis.slice(0, 3)
    
    const baseBio = `${selectedEmojis.join(' ')} ${req.name}
${req.profession} ${selectedEmojis[0] || ''}

${req.tone === 'Motivational' ? '💪 Inspiring others to reach their goals' :
  req.tone === 'Creative' ? '🎨 Creating beautiful content daily' :
  req.tone === 'Professional' ? 'Building meaningful connections' :
  req.tone === 'Funny' ? '😂 Making the internet a funnier place' :
  'Sharing my journey and experiences'}

${req.interests ? `\nPassionate about: ${req.interests}` : ''}

${req.callToAction === 'Custom CTA' ? 'Let\'s connect!' : req.callToAction}`

    const hashtags = req.includeHashtags ? [
      `#${req.profession.replace(/\s+/g, '')}`,
      '#Instagram',
      '#ContentCreator',
      '#Motivation',
      '#Lifestyle',
      '#Inspiration',
      '#FollowMe',
      '#Like4Like',
      '#InstaGood',
      '#Photography'
    ] : []

    return {
      bio: baseBio,
      hashtags,
      characterCount: baseBio.length + (req.includeHashtags ? hashtags.join(' ').length : 0)
    }
  }

  const generateNames = async () => {
    setIsGeneratingNames(true)
    setNameError("")
    setGeneratedNames(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockNames = generateMockNames(nameRequest)
      setGeneratedNames(mockNames)
    } catch (err) {
      setNameError("Failed to generate names. Please try again.")
    } finally {
      setIsGeneratingNames(false)
    }
  }

  const generateMockNames = (req: NameRequest): GeneratedNames => {
    const nameTemplates = {
      'Business': ['Pro Solutions', 'Elite Services', 'Prime Consulting', 'Apex Group', 'Nexus Corp'],
      'Personal Brand': ['Creative Vibes', 'Inspired Living', 'Bold Journey', 'Authentic Self', 'Pure Essence'],
      'Creative': ['Artistic Soul', 'Creative Canvas', 'Imagination Studio', 'Artistic Flow', 'Creative Spark'],
      'Tech': ['Tech Innovator', 'Digital Solutions', 'Code Master', 'Tech Wizard', 'Digital Genius'],
      'Fashion': ['Style Icon', 'Fashion Forward', 'Trend Setter', 'Style Maven', 'Fashionista'],
      'Food': ['Culinary Artist', 'Food Explorer', 'Taste Master', 'Kitchen Wizard', 'Flavor Creator'],
      'Travel': ['Wanderlust Soul', 'Globe Trotter', 'Adventure Seeker', 'Travel Enthusiast', 'World Explorer'],
      'Fitness': ['Fit Life', 'Strength Builder', 'Health Warrior', 'Fitness Pro', 'Wellness Guide'],
      'Beauty': ['Beauty Expert', 'Glow Master', 'Beauty Guru', 'Style Queen', 'Beauty Icon'],
      'Music': ['Melody Maker', 'Sound Creator', 'Music Producer', 'Audio Artist', 'Rhythm Master']
    }

    const baseNames = nameTemplates[req.category as keyof typeof nameTemplates] || nameTemplates['Personal Brand']
    
    // Generate variations based on style
    const variations = baseNames.map(name => {
      switch (req.style) {
        case 'Modern': return name + ' 2024'
        case 'Classic': return 'The ' + name
        case 'Creative': return name.replace(' ', ' & ')
        case 'Professional': return name + ' Pro'
        case 'Trendy': return name + ' Co'
        case 'Unique': return name.split(' ').reverse().join(' ')
        case 'Simple': return name.split(' ')[0]
        case 'Elegant': return name + ' Studio'
        default: return name
      }
    })

    return {
      names: variations.slice(0, 8),
      category: req.category
    }
  }

  const generateUsernames = async () => {
    if (!usernameRequest.name.trim()) {
      setUsernameError("Please enter your name or keyword")
      return
    }

    setIsGeneratingUsernames(true)
    setUsernameError("")
    setGeneratedUsernames(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockUsernames = generateMockUsernames(usernameRequest)
      setGeneratedUsernames(mockUsernames)
    } catch (err) {
      setUsernameError("Failed to generate usernames. Please try again.")
    } finally {
      setIsGeneratingUsernames(false)
    }
  }

  const generateMockUsernames = (req: UsernameRequest): GeneratedUsernames => {
    const baseName = req.name.toLowerCase().replace(/\s+/g, '')
    const numbers = req.includeNumbers ? ['123', '2024', '99', '01', '88'] : ['']
    const separators = req.includeUnderscores ? ['_', ''] : ['']
    
    const usernames = []
    
    // Generate different variations
    for (let i = 0; i < 10; i++) {
      const num = numbers[i % numbers.length]
      const sep = separators[i % separators.length]
      
      let username = ''
      switch (req.style) {
        case 'Simple': username = baseName + num; break
        case 'Creative': username = baseName + sep + 'creative' + num; break
        case 'Professional': username = baseName + sep + 'pro' + num; break
        case 'Trendy': username = baseName + sep + 'official' + num; break
        case 'Unique': username = baseName.split('').reverse().join('') + num; break
        case 'Memorable': username = baseName + sep + 'memorable' + num; break
        case 'Brandable': username = baseName + sep + 'brand' + num; break
        default: username = baseName + num; break
      }
      
      usernames.push(username)
    }

    // Mock availability (random for demo)
    const availability: { [key: string]: boolean } = {}
    usernames.forEach(username => {
      availability[username] = Math.random() > 0.3 // 70% available
    })

    return {
      usernames: usernames.slice(0, 8),
      availability
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const downloadContent = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getCharacterColor = (count: number) => {
    if (count > 150) return "text-red-500"
    if (count > 120) return "text-yellow-500"
    return "text-green-500"
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Instagram Tools Suite
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Generate Instagram bios, name suggestions, and username ideas all in one place
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setActiveTab('bio')}
              className={`px-6 py-3 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'bio'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Instagram className="w-4 h-4" />
              Bio Generator
            </button>
            <button
              onClick={() => setActiveTab('name')}
              className={`px-6 py-3 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'name'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <User className="w-4 h-4" />
              Name Suggestion
            </button>
            <button
              onClick={() => setActiveTab('username')}
              className={`px-6 py-3 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'username'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <AtSign className="w-4 h-4" />
              Username Suggestion
            </button>
          </div>
        </div>

        {/* Bio Generator Tab */}
        {activeTab === 'bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Instagram Bio Generator
                  </CardTitle>
                  <CardDescription>
                    Create engaging Instagram bios that capture your personality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <Input
                      placeholder="Enter your name"
                      value={bioRequest.name}
                      onChange={(e) => setBioRequest(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Profession</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={bioRequest.profession}
                      onChange={(e) => setBioRequest(prev => ({ ...prev, profession: e.target.value }))}
                    >
                      {professions.map(prof => (
                        <option key={prof} value={prof}>{prof}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Interests/Passions</label>
                    <Input
                      placeholder="e.g., Photography, Travel, Fitness"
                      value={bioRequest.interests}
                      onChange={(e) => setBioRequest(prev => ({ ...prev, interests: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tone</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={bioRequest.tone}
                      onChange={(e) => setBioRequest(prev => ({ ...prev, tone: e.target.value }))}
                    >
                      {tones.map(tone => (
                        <option key={tone} value={tone}>{tone}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Call to Action</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={bioRequest.callToAction}
                      onChange={(e) => setBioRequest(prev => ({ ...prev, callToAction: e.target.value }))}
                    >
                      {callToActions.map(cta => (
                        <option key={cta} value={cta}>{cta}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={bioRequest.includeEmojis}
                        onChange={(e) => setBioRequest(prev => ({ ...prev, includeEmojis: e.target.checked }))}
                        className="rounded"
                      />
                      <span className="text-sm">Include Emojis</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={bioRequest.includeHashtags}
                        onChange={(e) => setBioRequest(prev => ({ ...prev, includeHashtags: e.target.checked }))}
                        className="rounded"
                      />
                      <span className="text-sm">Include Hashtags</span>
                    </label>
                  </div>

                  <Button 
                    onClick={generateBio} 
                    disabled={isGeneratingBio || !bioRequest.name.trim()}
                    className="w-full"
                  >
                    {isGeneratingBio ? (
                      <>
                        <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                        Generating Bio...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 w-4 h-4" />
                        Generate Bio
                      </>
                    )}
                  </Button>

                  {bioError && (
                    <p className="text-red-500 text-sm">{bioError}</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Generated Bio */}
            <div>
              {generatedBio ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Instagram className="w-5 h-5" />
                        Generated Bio
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(generatedBio.bio)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadContent(generatedBio.bio, 'instagram_bio.txt')}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Bio</h3>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <pre className="whitespace-pre-wrap text-sm">{generatedBio.bio}</pre>
                        </div>
                      </div>

                      {generatedBio.hashtags.length > 0 && (
                        <div>
                          <h3 className="font-semibold mb-2">Hashtags</h3>
                          <div className="flex flex-wrap gap-2">
                            {generatedBio.hashtags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-sm">
                        <span>Character Count:</span>
                        <span className={getCharacterColor(generatedBio.characterCount)}>
                          {generatedBio.characterCount} / 150
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex items-center justify-center h-96">
                    <div className="text-center text-muted-foreground">
                      <Instagram className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Your generated bio will appear here</p>
                      <p className="text-sm">Fill in the details and click "Generate Bio"</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Name Suggestion Tab */}
        {activeTab === 'name' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Name Suggestion Generator
                  </CardTitle>
                  <CardDescription>
                    Get creative name suggestions for your brand or project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={nameRequest.category}
                      onChange={(e) => setNameRequest(prev => ({ ...prev, category: e.target.value }))}
                    >
                      {nameCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Style</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={nameRequest.style}
                      onChange={(e) => setNameRequest(prev => ({ ...prev, style: e.target.value }))}
                    >
                      {nameStyles.map(style => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Length</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={nameRequest.length}
                      onChange={(e) => setNameRequest(prev => ({ ...prev, length: e.target.value }))}
                    >
                      {nameLengths.map(length => (
                        <option key={length} value={length}>{length}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Language</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={nameRequest.language}
                      onChange={(e) => setNameRequest(prev => ({ ...prev, language: e.target.value }))}
                    >
                      {languages.map(language => (
                        <option key={language} value={language}>{language}</option>
                      ))}
                    </select>
                  </div>

                  <Button 
                    onClick={generateNames} 
                    disabled={isGeneratingNames}
                    className="w-full"
                  >
                    {isGeneratingNames ? (
                      <>
                        <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                        Generating Names...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 w-4 h-4" />
                        Generate Names
                      </>
                    )}
                  </Button>

                  {nameError && (
                    <p className="text-red-500 text-sm">{nameError}</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Generated Names */}
            <div>
              {generatedNames ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Suggested Names
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadContent(generatedNames.names.join('\n'), 'name_suggestions.txt')}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground mb-4">
                        {generatedNames.names.length} name suggestions for {generatedNames.category}
                      </p>
                      {generatedNames.names.map((name, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="font-medium">{name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(name)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex items-center justify-center h-96">
                    <div className="text-center text-muted-foreground">
                      <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Your name suggestions will appear here</p>
                      <p className="text-sm">Select your preferences and click "Generate Names"</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Username Suggestion Tab */}
        {activeTab === 'username' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AtSign className="w-5 h-5" />
                    Username Suggestion Generator
                  </CardTitle>
                  <CardDescription>
                    Generate unique and available username ideas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name/Keyword *</label>
                    <Input
                      placeholder="Enter your name or keyword"
                      value={usernameRequest.name}
                      onChange={(e) => setUsernameRequest(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={usernameRequest.category}
                      onChange={(e) => setUsernameRequest(prev => ({ ...prev, category: e.target.value }))}
                    >
                      <option value="Personal">Personal</option>
                      <option value="Business">Business</option>
                      <option value="Creative">Creative</option>
                      <option value="Brand">Brand</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Style</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={usernameRequest.style}
                      onChange={(e) => setUsernameRequest(prev => ({ ...prev, style: e.target.value }))}
                    >
                      {usernameStyles.map(style => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={usernameRequest.includeNumbers}
                        onChange={(e) => setUsernameRequest(prev => ({ ...prev, includeNumbers: e.target.checked }))}
                        className="rounded"
                      />
                      <span className="text-sm">Include Numbers</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={usernameRequest.includeUnderscores}
                        onChange={(e) => setUsernameRequest(prev => ({ ...prev, includeUnderscores: e.target.checked }))}
                        className="rounded"
                      />
                      <span className="text-sm">Include Underscores</span>
                    </label>
                  </div>

                  <Button 
                    onClick={generateUsernames} 
                    disabled={isGeneratingUsernames || !usernameRequest.name.trim()}
                    className="w-full"
                  >
                    {isGeneratingUsernames ? (
                      <>
                        <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                        Generating Usernames...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 w-4 h-4" />
                        Generate Usernames
                      </>
                    )}
                  </Button>

                  {usernameError && (
                    <p className="text-red-500 text-sm">{usernameError}</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Generated Usernames */}
            <div>
              {generatedUsernames ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <AtSign className="w-5 h-5" />
                        Suggested Usernames
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadContent(generatedUsernames.usernames.join('\n'), 'username_suggestions.txt')}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground mb-4">
                        {generatedUsernames.usernames.length} username suggestions
                      </p>
                      {generatedUsernames.usernames.map((username, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">@{username}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              generatedUsernames.availability[username]
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {generatedUsernames.availability[username] ? 'Available' : 'Taken'}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(username)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex items-center justify-center h-96">
                    <div className="text-center text-muted-foreground">
                      <AtSign className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Your username suggestions will appear here</p>
                      <p className="text-sm">Enter your name and click "Generate Usernames"</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="#contact">
              Get Professional Instagram Help
            </Link>
          </Button>
          <Button variant="outline" onClick={() => {
            setGeneratedBio(null)
            setGeneratedNames(null)
            setGeneratedUsernames(null)
            setBioRequest(prev => ({ ...prev, name: '', interests: '' }))
            setUsernameRequest(prev => ({ ...prev, name: '' }))
          }}>
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}
