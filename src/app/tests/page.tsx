"use client"

import { tests } from "@/data/tests"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, ArrowRight, Clock } from "lucide-react"

export default function TestsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-headline text-center mb-2">
          Practice Tests
        </h1>
        <p className="text-muted-foreground text-center mb-10">
          Select a test to challenge your comprehensive nursing knowledge.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tests.map((test, index) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
          >
            <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg border bg-card/80 backdrop-blur-sm border-border/20 hover:border-accent transition-all duration-300 group">
              <div>
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <ClipboardCheck className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">{test.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A comprehensive test covering multiple nursing topics.
                  </CardDescription>
                  <div className="flex justify-between items-center text-muted-foreground text-sm mt-4 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4" />
                      <span>{test.questions.length} questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{test.timeLimitMinutes ? `${test.timeLimitMinutes} min limit` : 'No time limit'}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <CardContent>
                <Button asChild className="w-full mt-4">
                  <Link href={`/test/${test.id}`}>
                    Start Test
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
